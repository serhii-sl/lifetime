import styled from 'styled-components';

export const TooltipWrapper = styled.div`
  position: relative;

  .tooltip-content {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0.4s linear, opacity 0.4s linear;
  }

  :last-child:hover {
    .tooltip-content {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export const TooltipContent = styled.div`
  position: absolute;
  top: 100%;
  right: 100%;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Option = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 32px;
  white-space: nowrap;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  opacity: 0.7;
  transition: opacity 0.3s linear;

  :hover {
    opacity: 1;
    background-color: ${({ theme }) => theme.colors.blue200};
  }
`;
