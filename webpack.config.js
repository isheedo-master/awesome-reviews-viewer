const webpack = require('webpack');
const config = require('./config');

const API_HOST = config.apiHost;

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js'
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		contentBase: './dist',
		historyApiFallback: true,
		hot: true,
		proxy: {
			'/api': {
				'target': API_HOST,
				'pathRewrite': { '^/api': '' },
				'changeOrigin': true,
				'secure': false
			}
		}
	}
};
