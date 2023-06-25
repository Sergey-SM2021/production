import type { Meta, StoryObj } from "@storybook/react"
import { NavBar } from "./NavBar"
import { WithRouter } from "App/config/storybook/decorators/withRouter"
import { withTheme } from "App/config/storybook/decorators/withTheme"
import { withSwiper } from "App/config/storybook/decorators/withSwiper"

const meta = {
	title: "widgets/NavBar",
	component: NavBar,
	tags: ["autodocs"],
	parameters: {
		layout: "fullscreen",
	},
	decorators: [WithRouter, withTheme, withSwiper],
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {}
