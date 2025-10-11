const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	// just javascript files
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	// similar to live preview, don't have to keep running npx webpack
	// npx webpack serve
	devtool: "eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"],
	},

	// include html
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html",
		}),
	],
	// include css and images
	module: {
		rules: [
			// css
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
			// images
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg)$/i,
				type: "asset/resource",
			}
		],
	},
};
