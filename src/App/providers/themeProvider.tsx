import { PropsWithChildren } from "react"
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"

const theme = {
	black: "#2F3035",
	gray: "#F0F0F4",
}

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	return (
		<StyledComponentsThemeProvider theme={theme}>
			{children}
		</StyledComponentsThemeProvider>
	)
}
