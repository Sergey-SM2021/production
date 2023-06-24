import { Burger } from "shared/Burger.style"
import {
	HeaderBurger,
	HeaderLink,
	HeaderLinks,
	HeaderLoaction,
	HeaderLogo,
	HeaderUser,
	HeaderWrapper,
	UserActions,
} from "./Header.style"
import Logo from "../assets/logo.svg"

import Cart from "../assets/cart.svg"
import Favorites from "../assets/favorites.svg"
import Avatar from "../assets/avatar.svg"
import Location from "../assets/Location.svg"
import { Container } from "shared/Container.style"
import { Text } from "shared/Text.style"

export const Header = () => {
	const links = [
		{ name: "Магазины", path: "/shops" },
		{ name: "Акции", path: "/" },
		{ name: "Доставка и оплата", path: "/" },
	]
	return (
		<Container>
			<HeaderWrapper>
				<HeaderBurger>
					<Burger />
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
	)
}
