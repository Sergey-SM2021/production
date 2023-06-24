import { StoryFn } from "@storybook/react"
import { ThemeProvider } from "styled-components"

const theme = {
	black: "#2F3035",
}

export const withTheme = (Story: StoryFn) => (
	<ThemeProvider theme={theme}>
		<Story />
	</ThemeProvider>
)
