import styled, { css } from 'styled-components';

export const TabsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue100};
`;

export const Tab = styled.div<{ isActive?: boolean }>`
  display: flex;
  padding: 24px;
  font-size: 18px;
  color: ${({ isActive, theme }) => (isActive ? theme.colors.blue800 : theme.colors.gray500)};
  cursor: pointer;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      :before {
        content: '';
        position: absolute;
        height: 3px;
        bottom: 0;
        right: 0;
        left: 0;
        background: ${({ theme }) => theme.colors.blue800};
        box-shadow: 0 4px 4px ${({ theme }) => theme.colors.gray100};
        border-radius: 3px 3px 0 0;
      }
    `};
`;
