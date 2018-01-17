const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry: {
		//main是默认入口，也可是是多入口
		main: './src/main.js'
	},
	//出口
	output: {
		filename: './build.js',
		path: path.join(__dirname, 'dist')	//最好是绝对路径
	},
	module: {
		loaders: [
			{
				//处理ES6
				test: /\.js$/,
				loader: 'babel-loader',
				//排除 node_modules下的所有
				exclude: /node_modules/,
				options: {
					presets: ['es2015'],	//关键字
					plugins: ['transform-runtime'],	//函数
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
			},
			{
				test: /\.(jpg|svg|png|gif)$/,
				loader: 'url-loader?limit=4096&name=[name].[ext]',
			}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			template: './src/index.html',
		})
	]

};