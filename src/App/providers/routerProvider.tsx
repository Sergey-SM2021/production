import {
	createBrowserRouter,
	RouterProvider as BrowserRouterProvider,
	Outlet,
} from "react-router-dom"
import { Container } from "shared/ui/Container.style"
import { Header } from "widgets/Header/Header"
import { NavBar } from "widgets/NavBar/NavBar"

const router = createBrowserRouter([
	{
		element: (
			<>
				<Header />
				<NavBar />
				<Container>
					<Outlet />
				</Container>
			</>
		),
		children: [
			{
				element: <div>main</div>,
				path: "",
			},
			{
				element: <div>catalog</div>,
				path: "/catalog",
			},
			{
				element: <div>item</div>,
				path: "/:id",
			},
		],
		path: "/",
	},
])

export const RouterProvider = () => {
	return <BrowserRouterProvider router={router} />
}
