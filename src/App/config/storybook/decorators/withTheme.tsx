import { StoryFn } from "@storybook/react"
import { ThemeProvider } from "App/providers/themeProvider"

export const withTheme = (Story: StoryFn) => (
	<ThemeProvider>
		<Story />
	</ThemeProvider>
)
