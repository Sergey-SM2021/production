import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
const config: StorybookConfig = {
  stories: ["../../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },

  webpackFinal(config, options) {
    config.resolve = {
      extensions: [".js", ".jsx", ".tsx", ".ts"],
      modules: [
        path.resolve(__dirname, "../../", "src"),
        path.resolve(__dirname, "../../", "node_modules"),
      ],
      fallback: {
        url: require.resolve("url"),
        fs: require.resolve("fs"),
        assert: require.resolve("assert"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        buffer: require.resolve("buffer"),
        stream: require.resolve("stream-browserify"),
        "crypto-browserify": require.resolve("crypto-browserify"),
      },
    };

    const svgRule = config.module?.rules?.find((rule) => {
      const test = (rule as { test: RegExp }).test;

      if (!test) {
        return false;
      }

      return test.test(".svg");
    }) as { [key: string]: any };

    svgRule.exclude = /\.svg$/;

    config.module?.rules?.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default config;
