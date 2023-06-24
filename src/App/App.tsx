import { Header } from "widgets/Header/Header"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./providers/themeProvider"

export const App = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<div>
					<Header></Header>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	)
}
