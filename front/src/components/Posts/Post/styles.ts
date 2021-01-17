import styled from 'styled-components'

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.gray200};
  border-radius: 8px;
  padding: 20px 32px;
  margin-bottom: 24px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const HeaderContent = styled.div`
  height: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 8px;
`

export const Name = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
`

export const Date = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray500};
`

export const PostContent = styled.div`
  margin: 12px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.blue700};
`
