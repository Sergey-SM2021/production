import { StoryFn } from "@storybook/react"
import { BrowserRouter } from "react-router-dom"

export const WithRouter = (Story: StoryFn) => (
	<BrowserRouter>
		<Story />
	</BrowserRouter>
)
