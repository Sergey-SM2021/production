import { Header } from "widgets/Header/Header"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"

const theme = {
	black: "#2F3035",
}

export const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<div>
					<Header></Header>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	)
}
