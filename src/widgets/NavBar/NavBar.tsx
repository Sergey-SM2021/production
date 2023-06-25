import { Swiper, SwiperProps, SwiperSlide } from "swiper/react"
import "swiper/css"
import { NavBarLink, NavBarWrapper } from "./NavBar.style"

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

	const swiperConfig: SwiperProps = {
		slidesPerView: "auto",
		spaceBetween: 60,
	}

	return (
		<NavBarWrapper>
			<Swiper {...swiperConfig}>
				{items.map((el) => (
					<SwiperSlide style={{ width: "auto" }} key={el}>
						<NavBarLink to={el}>{el}</NavBarLink>
					</SwiperSlide>
				))}
			</Swiper>
		</NavBarWrapper>
	)
}
