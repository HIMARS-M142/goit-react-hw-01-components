import { FriendListLi, FriendStatus } from './FriendListStyled';
export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <FriendListLi key={id} className="item">
        <FriendStatus isOnline={isOnline} className="status"></FriendStatus>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </FriendListLi>
    );
  });
};
