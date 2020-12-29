import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 340px;
  padding: 16px 16px;
  margin: 16px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-bottom: 16px;
  font-size: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue100};
`;
export const Image = styled.img``;

export const HeaderText = styled.div`
  margin-bottom: 12px;
  white-space: nowrap;
`;

export const Description = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray500};
`;

export const TextWrapper = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
`;

export const Placeholder = styled.div``;
