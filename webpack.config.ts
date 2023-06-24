import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"
import { Configuration } from "webpack"
import "webpack-dev-server"

interface IProps {
  MODE: "development" | "production";
}

export default (props: IProps): Configuration => {
	const { MODE = "development" } = props
	return {
		mode: "development",
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
				{
					test: /\.svg$/i,
					issuer: /\.[jt]sx?$/,
					use: ["@svgr/webpack"],
				},
			],
		},
		entry: path.resolve("/", "index.tsx"),
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "my-first-webpack.bundle.js",
		},
		devServer:
      MODE === "development"
      	? {
      		open: true,
      		port: 9000,
      	}
      	: undefined,
		resolve: {
			extensions: [".js", ".jsx", ".tsx", ".ts"],
			modules: [path.resolve(__dirname, "src"), "node_modules"],
		},
	}
}
