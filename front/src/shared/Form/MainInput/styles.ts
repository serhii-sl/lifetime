import styled from 'styled-components'

export const Input = styled.input`
  padding: 12px 12px 12px 58px;
  width: 280px;
  border-radius: 24px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray400};
  outline: none;
  border: none;
  margin-top: 4px;
  position: relative;
  box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.2);

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray180};
    font-size: 16px;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray400};
`

export const Error = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.red};
  text-align: center;
`

export const Wrapper = styled.div`
  margin: 8px 0;
  position: relative;

  img {
    position: absolute;
    z-index: 999;
    bottom: 0;
    top: calc(50% + 2px);
    transform: translateY(-50%);
    left: 16px;
    height: 26px;
  }
`
