import { Header } from "widgets/Header/Header"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "./providers/themeProvider"
import { NavBar } from "widgets/NavBar/NavBar"
import "./style.css"

export const App = () => {
	return (
		<ThemeProvider>
			<BrowserRouter>
				<div>
					<Header />
					<NavBar />
				</div>
			</BrowserRouter>
		</ThemeProvider>
	)
}
