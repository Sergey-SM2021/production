import { PropsWithChildren } from "react"
import { Container } from "shared/ui/Container.style"
import { Header } from "widgets/Header/Header"
import { NavBar } from "widgets/NavBar/NavBar"

export const Layout = ({ children }: PropsWithChildren) => {
	return (
		<Container>
			<Header />
			<NavBar />
			<Container>{children}</Container>
		</Container>
	)
}
