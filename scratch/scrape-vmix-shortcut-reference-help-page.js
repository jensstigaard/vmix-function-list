const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const xmldom = require('xmldom')
const xpath = require('xpath')

const FunctionList = require('../dist/index').default

const list = new FunctionList()

const domparser = new xmldom.DOMParser(
	// https://stackoverflow.com/questions/56213117/how-to-silent-all-the-warning-messages-of-xml-dom-in-node-js
	{
		locator: {},
		errorHandler: {
			warning: function (w) { },
			error: function (e) { },
			fatalError: function (e) { console.error(e) }
		}
	}
)

const USE_LOCAL_DATA = true

const EXTERNAL_DATA_URL = 'https://www.vmix.com/help24/ShortcutFunctionReference.html'
const LOCAL_DATA_PATH = path.resolve(__dirname, 'scrape.html')

async function getExternalData() {
	const response = await axios.get(EXTERNAL_DATA_URL)

	if (!response.data) {
		console.error('No response data...')
		process.exit(1)
	}

	const data = response.data

	fs.writeFile(LOCAL_DATA_PATH, data, err => {
		if (err) throw err
	})

	return data
}

function getLocalData() {
	return fs.readFileSync(LOCAL_DATA_PATH, 'utf-8')
}

async function main() {

	const data = USE_LOCAL_DATA ? getLocalData() : await getExternalData()

	const xml = domparser.parseFromString(data)

	const table = xpath.select1('//table', xml)

	if (!table) {
		console.error('No table found in the HTML response...')
		process.exit(1)
	}

	const rows = xpath.select('tr', table)
	console.log('Found rows', rows.length)

	const functions = []

	let currentCategory = null
	rows.forEach(row => {
		const cells = xpath.select('td', row)

		if (cells.length !== 3) {
			console.log('Unexcepted number of cells found in row...')
			return
		}

		const firstCell = cells[0]
		const firstCellStyle = firstCell.attributes && firstCell.attributes.getNamedItem('style') ? firstCell.attributes.getNamedItem('style') : undefined

		// Is the row a header (including category title)?
		if (firstCellStyle && firstCellStyle.nodeValue.includes('background-color: #ccffcc;')) {
			const categoryTitle = firstCell.textContent.trim()
			// console.log('Row is including header', categoryTitle)
			currentCategory = categoryTitle
			return
		}

		// Guard no current category
		if (!currentCategory) {
			console.error('Somehow has not seen header yet...')
			return
		}

		const func = {
			category: currentCategory,
			functionName: cells[0].textContent.trim(),
			description: cells[1].textContent.trim(),
			parameters: cells[2].textContent.trim().split(',')
		}

		// Add func to array if not existing
		try {
			list.get(func.functionName)
		} catch (e) {
			functions.push(func)
		}
	})

	console.log('Total number of functions found:', functions.length)

	const functionsByCategory = _.groupBy(functions, 'category')

	Object.entries(functionsByCategory).forEach(([category, functions]) => {
		console.log('--', category, functions.length, '--')
		functions.forEach(f => console.log(f.functionName, f.description, f.parameters))
		console.log()
	})
}

main()

