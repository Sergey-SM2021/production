import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 80px 1fr;
  align-items: center;
  gap: 90px;
  position: relative;
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
    position: relative;
    z-index: 1;
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

export const HeaderMenu = styled.div`
  box-sizing: border-box;
  padding-top: 100px;
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 90%;
  top: 0;
  left: 0;
  display: none;
  background-color: #fff;
  box-shadow: 1px 0 10px #0000001d;
  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const MenuLocationWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`

export const MenuLocation = styled.div`
  display: flex;
`
