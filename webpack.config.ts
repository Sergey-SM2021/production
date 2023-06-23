import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import "webpack-dev-server"

interface IProps {}

export default (props: IProps): Configuration => {
	return {
		mode: "production",
		plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
		module: {
			rules: [
				{
					test: /\.tsx$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"],
						},
					},
				},
			],
		},
		entry: path.resolve("/", "index.tsx"),
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "my-first-webpack.bundle.js",
		},
		devServer: {
			open: true,
			port: 9000,
		},
		resolve: {
			extensions: [".js", ".jsx", ".tsx", ".ts"],
			modules: [path.resolve(__dirname, "src"), "node_modules"],
		},
	}
}
