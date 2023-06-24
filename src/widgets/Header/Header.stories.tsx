import type { Meta, StoryObj } from "@storybook/react"
import { Header } from "./Header"
import { WithRouter } from "App/config/storybook/decorators/withRouter"
import { withTheme } from "App/config/storybook/decorators/withTheme"

const meta = {
	title: "widgets/Header",
	component: Header,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	decorators: [WithRouter, withTheme],
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
