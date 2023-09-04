import { styled } from 'styled-components';

export const FriendStatus = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  background-color: ${({ $isOnline }) => {
    return $isOnline ? 'green' : 'red';
  }};
  border-radius: 100%;
  padding: 0;
  margin: 0;
`;
export const FriendListUl = styled.ul`
  gap: 20px;
  font-size: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
`;
export const FriendListLi = styled.li`
  gap: 10px;
  padding: 0;
  display: flex;
  align-items: center;

  margin: 0;
`;
