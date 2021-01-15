import styled from 'styled-components'

export const SignInWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const SidebarBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderText = styled.div`
  font-size: 42px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`

export const Description = styled.div`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.white};
  z-index: 9;
`
