import styled from 'styled-components';

export const AvatarComponent = styled.img<{ isOnline?: boolean }>`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.blue800};
  box-sizing: border-box;
  filter: drop-shadow(-1px 1px 4px ${({ theme }) => theme.colors.blue150});

  :hover {
    filter: drop-shadow(1px 3x 4px ${({ theme }) => theme.colors.blue150});
    transform: scale(1.03);
  }
`;
