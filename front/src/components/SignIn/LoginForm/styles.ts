import styled from 'styled-components'

export const LoginFormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 54px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 40px;
  box-shadow: 10px 12px 24px rgba(0, 0, 0, 0.5);
`

export const LoginButton = styled.button`
  display: block;
  padding: 16px 24px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 8px;
  background: linear-gradient(to right, #116fe8 0%, #002bad 100%);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`

export const Header = styled.div`
  font-size: 28px;
  margin-bottom: 24px;
`

export const Text = styled.div`
  font-size: 22px;
  margin: 24px 0;
`

export const SocialIcon = styled.img`
  width: 36px;
  margin: 0 8px;
`
