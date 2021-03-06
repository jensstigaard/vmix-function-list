export default {

	DataSourceAutoNextOff: {
		description: 'Turn off auto next for data source',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'string',
					description: 'Data source name Name'
				},
				{
					type: 'string',
					description: 'Table name'
				},
			]
		}
	},

	DataSourceAutoNextOn: {
		description: 'Turn on auto next for data source',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'string',
					description: 'Data source name'
				},
				{
					type: 'string',
					description: 'Table name'
				},
			]
		}
	},

	DataSourceAutoNextOnOff: {
		description: 'Toggle on/off auto next for data source',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'string',
					description: 'Data source name'
				},
				{
					type: 'string',
					description: 'Table name'
				},
			]
		}
	},

	DataSourceNextRow: {
		description: 'Select next row of data source',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'string',
					description: 'Data source name'
				},
				{
					type: 'string',
					description: 'Table name'
				},
			]
		}
	},


	DataSourcePause: {
		description: 'Pause data source',
		parameters: {
			Value: {
				type: 'string',
				description: 'Data source name',
				examples: 'Excel/CSV'
			}
		}
	},

	DataSourcePlay: {
		description: 'Play data source',
		parameters: {
			Value: {
				type: 'string',
				description: 'Data source name',
				examples: 'Excel/CSV'
			}
		}
	},

	DataSourcePlayPause: {
		description: 'Play data source',
		parameters: {
			Value: {
				type: 'string',
				description: 'Data source name',
				examples: 'Excel/CSV'
			}
		}
	},

	DataSourcePreviousRow: {
		description: 'Select previous row of data source',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'string',
					description: 'Data source name'
				},
				{
					type: 'string',
					description: 'Table name'
				},
			]
		}
	},

	DataSourceSelectRow: {
		description: 'Select row by row index of data source',
		parameters: {
			Value: [ // Composite separated by ","
				{
					type: 'string',
					description: 'Data source name'
				},
				{
					type: 'string',
					description: 'Table name'
				},
				{
					type: 'number',
					description: 'Row Index starting from 0'
				},
			]
		}
	}
}
