const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js'
	},
	resolve: {
		extensions: [".js", ".wasm"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	devServer: {
		contentBase: './dist',
		https: true,
		host: '0.0.0.0'
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /zcv\.wasm$/,
				type: "javascript/auto",
				loader: "file-loader"
			},
		]
	}
};