import { FriendListLi, FriendStatus } from './FriendListStyled';
export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <FriendListLi key={id} className="item">
      <FriendStatus $isOnline={isOnline} className="status"></FriendStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendListLi>
  );
};
