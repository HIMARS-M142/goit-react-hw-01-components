import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: gray;

  height: 400px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 20px;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 50px;
`;
export const DescriptionProfile = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
export const ProfileImage = styled.img`
  width: 100px;
  background-color: white;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;
export const ProfileUl = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  padding: 0;
`;
export const ProfileList = styled.li`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
