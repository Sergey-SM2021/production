import type { Meta, StoryObj } from "@storybook/react"
import { Layout } from "./Layout"
import { WithRouter } from "App/config/storybook/decorators/withRouter"
import { withTheme } from "App/config/storybook/decorators/withTheme"


const meta = {
	title: "widgets/Layout",
	component: Layout,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	decorators: [WithRouter, withTheme],
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
