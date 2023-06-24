import { useState } from "react"
import { styled } from "styled-components"

export const Burger = () => {
	const [isOpen, setIsOpen] = useState(true)

	const onChange = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<BurgerWrapper open={isOpen} onClick={onChange}>
			<span></span>
		</BurgerWrapper>
	)
}

export const BurgerWrapper = styled.div<{ open: boolean }>`
  width: 30px;
  height: 20px;
  position: relative;
  display: flex;
  align-items: center;
  &::after,
  &::before,
  span {
    background-color: #000;
    width: 100%;
    height: 2px;
    display: ${({ open }) => (open ? "block" : "none")};
  }
  &::after,
  &::before {
    position: absolute;
    content: "";
    display: block;
  }
  &:after {
    transform: ${({ open }) => (open ? "" : "rotate(45deg)")};
    top: ${({ open }) => (open ? 0 : "")};
  }
  &::before {
    transform: ${({ open }) => (open ? "" : "rotate(315deg)")};
    bottom: ${({ open }) => (open ? 0 : "")};
  }
  &:hover {
    cursor: pointer;
  }
`
