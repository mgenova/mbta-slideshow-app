

module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'app/js/bundle.js'
	},
	module: {
		loaders: [

			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query:{presets:['es2015']}},
			{test: /\.css$/, loader: "style-loader!css-loader" }

		]
	}
}
