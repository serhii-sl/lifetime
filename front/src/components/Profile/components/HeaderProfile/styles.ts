import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  background-image: url("static/images/profile-background.jpg");
  height: 250px;
  position: relative;
`

export const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  position: absolute;
  bottom: -70px;
  left: 80px;
`

export const UserName = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  line-height: 2;
  padding-left: 280px;
`