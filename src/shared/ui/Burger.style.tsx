import { styled } from "styled-components"

interface BurgerProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Burger = ({ isOpen, onClick }: BurgerProps) => {
	const handlerClick = (e) => {
		e.stopPropagation()
		onClick()
	}
	return (
		<BurgerWrapper open={!isOpen} onClick={handlerClick}>
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
