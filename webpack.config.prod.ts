import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {Configuration as WebpackConfiguration} from "webpack";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

const config: WebpackConfiguration = {
	mode: "production",
	devtool: "source-map",
	context: path.resolve(__dirname, "src"),
	entry: "./index.tsx",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].[contenthash].js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".tsx", ".ts", ".jsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
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
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
		// , new BundleAnalyzerPlugin()
	],
	optimization: {
		splitChunks: {
			chunks: "all"
		},
		runtimeChunk: "single",
		minimize: true,
		minimizer: [`...`, new CssMinimizerPlugin()]
	}
};

export default config;
