import { styled } from "styled-components"

export const Text = styled.p<{ bold?: boolean }>`
  color: ${({ theme }) => theme.black};
  font-weight: ${({ bold }) => (bold ? 700 : 400)};
`
