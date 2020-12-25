import styled from 'styled-components';

export const FieldWrapper = styled.div`
  width: 320px;
  height: 48px;
  display: flex;
  padding: 8px 12px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: ${({ theme }) => theme.colors.black400};
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 1px 4px 8px -4px ${({ theme }) => theme.colors.blue100};
`;

export const AddButton = styled.img`
  width: 36px;
  opacity: 0.7;
  color: ${({ theme }) => theme.colors.blue800};
  border: none;
  outline: none;
  cursor: pointer;
  filter: drop-shadow(1px 4px 8px -4px ${({ theme }) => theme.colors.blue100});
  transition: width, height 0.2s;

  :hover {
    filter: drop-shadow(1px 2px 8px ${({ theme }) => theme.colors.blue100});
    opacity: 1;
    transform: scale(1.03);
  }
`;
