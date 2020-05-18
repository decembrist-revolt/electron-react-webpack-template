// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = [
	// new ForkTsCheckerWebpackPlugin(),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, 'src', 'index.html')
	})
];
