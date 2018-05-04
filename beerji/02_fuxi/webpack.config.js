const path = require("path");

module.exports = {
	devtool: "source-map",
	entry: __dirname + '/src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/dist')
	},
	devServer: {
		contentBase: "./dist",
		historyApiFallback: true,
		inline: true,
		port: 9527
	}
};