'use strict';
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	//入口
	entry: {
		main: './src/main.js'
	},
	//出口
	output: {
		//所有产出资源路径
		path: path.join(__dirname, 'dist'),
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader'
			},
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'
			},
			{
				test: /\.(jpg|png|svg|ttf|woff|woff2|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 4096,
					name: '[name].[ext]', 
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['es2015'],
					plugins: ['transform-runtime'],
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
		})
	]
};


//npm i mint-ui vue-preview axios vue-router moment vue -S

//npm i webpack wepack-dev-server html-webpack-plugin css-loader style-loader less-loader autoprefixer-loader babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime url-loader file-loader vue-loader vue-template-compiler -D