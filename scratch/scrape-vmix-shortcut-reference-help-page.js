const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const axios = require('axios')
const xmldom = require('@xmldom/xmldom')
const xpath = require('xpath')

const FunctionList = require('../dist/index').default

const list = new FunctionList()

const domparser = new xmldom.DOMParser(
	// https://stackoverflow.com/questions/56213117/how-to-silent-all-the-warning-messages-of-xml-dom-in-node-js
	{
		locator: {},
		errorHandler: {
			warning: function (_w) { },
			error: function (_e) { },
			fatalError: function (e) { console.error(e) }
		}
	}
)

const USE_LOCAL_DATA = false

const EXTERNAL_DATA_URL = 'https://www.vmix.com/help24/ShortcutFunctionReference.html'
const LOCAL_DATA_PATH = path.resolve(__dirname, 'scraped.html')

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

/**
 * Main function
 * @returns
 */
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

	const newFunctions = []

	let currentCategory = null
	rows.slice(1, rows.length).forEach(row => {
		const rowCells = xpath.select('td', row)

		if (rowCells.length !== 3) {
			console.log('Unexcepted number of cells found in row...')
			return
		}

		const firstCell = rowCells[0]
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
			console.log(rowCells.map(c => c.textContent))
			return
		}

		const func = {
			category: currentCategory,
			functionName: rowCells[0].textContent.trim(),
			description: rowCells[1].textContent.trim(),
			parameters: rowCells[2].textContent.trim().split(',')
		}

		// console.log(func.functionName)

		// Add func to array if not existing
		try {
			list.get(func.functionName)
		} catch (e) {
			newFunctions.push(func)
		}
	})

	if (newFunctions.length === 0) {
		console.log('No new functions seen...')
		return
	}

	console.log('Total number of new functions found:', newFunctions.length)

	const newfunctionsByCategory = _.groupBy(newFunctions, 'category')

	Object.entries(newfunctionsByCategory).forEach(([category, functions]) => {
		console.log('--', category, functions.length, '--')
		functions.forEach(f => console.log(f.functionName, f.description, f.parameters))
		console.log('')
	})
}

main()

