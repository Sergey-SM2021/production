import { MainPage } from "pages/MainPage"
import {
	createBrowserRouter,
	RouterProvider as BrowserRouterProvider,
	Outlet,
} from "react-router-dom"
import { Layout } from "widgets/layout/Layout"

const router = createBrowserRouter([
	{
		errorElement: <div>Page notfound</div>,
		element: (
			<Layout>
				<Outlet />
			</Layout>
		),
		children: [
			{
				element: <MainPage />,
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
