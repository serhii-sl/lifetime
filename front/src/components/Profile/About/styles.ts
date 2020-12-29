import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 24px 36px;
  margin-top: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue100};
  border-radius: 8px;
  
`

export const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue100};
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`