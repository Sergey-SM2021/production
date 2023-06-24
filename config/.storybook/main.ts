import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";
import { RuleSetRule } from "webpack";
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
      modules: [path.resolve(__dirname, "../../", "src"), "node_modules"],
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
