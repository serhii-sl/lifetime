import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 72px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.gray200};
`;

export const LogoIcon = styled.img`
  width: 56px;
  height: 56px;
  filter: drop-shadow(3px 3px 2px ${({ theme }) => theme.colors.blue100});
  cursor: pointer;

  :hover {
    filter: drop-shadow(3px 6x 4px ${({ theme }) => theme.colors.blue100});
    transform: scale(1.03);
  }
`;
