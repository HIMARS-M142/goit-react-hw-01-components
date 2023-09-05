import { FriendListLi, FriendStatus } from './FriendListStyled';
export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <FriendListLi className="item">
      <FriendStatus $isOnline={isOnline} className="status"></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListLi>
  );
};
