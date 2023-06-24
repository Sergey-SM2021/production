import { Container } from "shared/ui/Container.style"
import { NavBarLink, NavBarSlide, NavBarWrapper } from "./NavBar.style"
import { Swiper } from "swiper/react"

import "swiper/css"
import { Text } from "shared/ui/Text.style"

export const NavBar = () => {
	const items = [
		"Квадроциклы",
		"Катера",
		"Гидроциклы",
		"Лодки",
		"Вездеходы",
		"Снегоходы",
		"Двигатели",
		"Запчасти",
	]

	return (
		<Container>
			<NavBarWrapper>
				<Swiper slidesPerView={"auto"} spaceBetween={100}>
					{items.map((el) => (
						<NavBarSlide key={el}>
							<Text>
								<NavBarLink to={el}>{el}</NavBarLink>
							</Text>
						</NavBarSlide>
					))}
				</Swiper>
			</NavBarWrapper>
		</Container>
	)
}
