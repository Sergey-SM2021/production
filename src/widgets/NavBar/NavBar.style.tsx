import { NavLink } from "react-router-dom"
import { styled } from "styled-components"
import { SwiperSlide } from "swiper/react"

export const NavBarWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
`

export const NavBarSlide = styled(SwiperSlide)`
  width: min-content;
  background-color: ${({ theme }) => theme.gray};
`

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  &.active {
    font-weight: 700;
    border-bottom: 2px solid ${({ theme }) => theme.black};
  }
  color: ${({ theme }) => theme.black};
  padding: 15px 0;
  display: block;
`
