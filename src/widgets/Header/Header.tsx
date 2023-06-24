import { Burger } from "shared/Burger.style"
import {
	HeaderBurger,
	HeaderLink,
	HeaderLinks,
	HeaderLoaction,
	HeaderLogo,
	HeaderMenu,
	HeaderUser,
	HeaderWrapper,
	MenuLocation,
	MenuLocationWrapper,
	UserActions,
} from "./Header.style"
import Logo from "../assets/logo.svg"
import Cart from "../assets/cart.svg"
import Favorites from "../assets/favorites.svg"
import Avatar from "../assets/avatar.svg"
import Location from "../assets/Location.svg"
import { Container } from "shared/Container.style"
import { Text } from "shared/Text.style"
import { useEffect, useRef, useState } from "react"

const links = [
	{ name: "Магазины", path: "/shops" },
	{ name: "Акции", path: "/" },
	{ name: "Доставка и оплата", path: "/" },
]

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const menu = useRef<HTMLDivElement>(null)

	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (!menu.current?.contains(e.target as HTMLElement)) {
				setIsOpen(false)
			}
		})
	}, [])

	return (
		<>
			{isOpen ? (
				<HeaderMenu ref={menu}>
					{links.map((el) => (
						<HeaderLink to={el.path} key={el.name}>
							<Text bold>{el.name}</Text>
						</HeaderLink>
					))}
					<MenuLocationWrapper>
						<MenuLocation>
							<Location />
							<Text bold>Москва, ул. Науки 25</Text>
						</MenuLocation>
					</MenuLocationWrapper>
				</HeaderMenu>
			) : null}
			<Container>
				<HeaderWrapper>
					<HeaderBurger>
						<Burger
							isOpen={isOpen}
							onClick={() => {
								setIsOpen((prev) => !prev)
							}}
						/>
					</HeaderBurger>
					<HeaderLinks>
						{links.map((el) => (
							<HeaderLink to={el.path} key={el.name}>
								<Text bold>{el.name}</Text>
							</HeaderLink>
						))}
					</HeaderLinks>
					<HeaderLogo>
						<Logo />
					</HeaderLogo>
					<HeaderUser>
						<HeaderLoaction>
							<Location />
							<Text bold>Москва, ул. Науки 25</Text>
						</HeaderLoaction>
						<UserActions>
							<Favorites />
							<Avatar />
							<Cart />
						</UserActions>
					</HeaderUser>
				</HeaderWrapper>
			</Container>
		</>
	)
}
