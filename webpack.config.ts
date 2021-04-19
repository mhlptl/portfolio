import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration as WebpackDevServerConfiguration} from "webpack-dev-server";
import {Configuration as WebpackConfiguration} from "webpack";

interface Configuration extends WebpackConfiguration {
	devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
	mode: "development",
	context: path.resolve(__dirname, "src"),
	entry: "./index.tsx",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "main.js",
		publicPath: "/"
	},
	devServer: {
		host: "0.0.0.0",
		liveReload: true,
		port: 3000,
		disableHostCheck: true,
		contentBase: path.join(__dirname, "public"),
		openPage: "http://localhost:3000",
		historyApiFallback: true,
		compress: true
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/
			},
			{
				test: /\.svg?$/,
				use: "@svgr/webpack"
			},
			{
				test: /\.(png|jpg)$/,
				use: "url-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html")
		})
	]
};

export default config;
