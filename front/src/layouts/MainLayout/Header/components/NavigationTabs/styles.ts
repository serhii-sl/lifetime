import styled, { css } from 'styled-components'

export const NavigationTabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Tab = styled.div<{ isActive?: boolean }>`
  height: 100%;
  display: flex;
  padding: 24px;
  font-size: 18px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue800 : theme.colors.gray500};
  cursor: pointer;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    css`
      :before {
        content: '';
        position: absolute;
        height: 3px;
        top: 0;
        right: 0;
        left: 0;
        background: ${({ theme }) => theme.colors.blue800};
        box-shadow: 0 4px 4px ${({ theme }) => theme.colors.gray100};
        border-radius: 0 0 3px 3px;
      }
    `};
`
