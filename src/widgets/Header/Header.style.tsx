import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  gap: 90px;
  @media (max-width: 1200px) {
    gap: 30px;
  }
`

export const HeaderUser = styled.div`
  display: flex;
  justify-content: space-between;
`

export const HeaderLogo = styled.div`
  justify-self: center;
`

export const UserActions = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const HeaderLoaction = styled.div`
  display: flex;
  @media (max-width: 900px) {
    * {
      display: none;
    }
  }
`

export const HeaderBurger = styled.div`
  display: none;
  @media (max-width: 900px) {
    display: block;
  }
`

export const HeaderLink = styled(Link)`
  text-decoration: none;
`

export const HeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    display: none;
  }
`
