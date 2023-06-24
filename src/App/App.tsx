import { ThemeProvider } from "./providers/themeProvider"
import "./style.css"
import { RouterProvider } from "./providers/routerProvider"

export const App = () => {
	return (
		<ThemeProvider>
			<RouterProvider />
		</ThemeProvider>
	)
}
