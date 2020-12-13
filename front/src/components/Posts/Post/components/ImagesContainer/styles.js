import styled, {css} from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  grid-auto-flow: dense;
  
  img {
    object-fit: cover;
    border: 2px solid ${({theme}) => theme.colors.gray200};
    border-radius: 8px;
    width: 100%;
  }
  
  ${({ isMoreTwoImages }) => isMoreTwoImages && css`
    grid-template-columns: repeat(2, 1fr);
    img {
      :first-child {
        grid-row: span 2;
      }
  }`}
  
  
  ${({ isTwoImages }) => isTwoImages && css`
    grid-template-columns: repeat(2, 50%);
  `}
`
