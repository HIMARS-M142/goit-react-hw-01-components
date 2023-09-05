import { FriendListUl } from './FriendListStyled';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <FriendListUl className="friend-list">
      {friends.map(({ id, isOnline, avatar, name }) => {
        <FriendListItem
          id={id}
          idOnline={isOnline}
          avatar={avatar}
          name={name}
        />;
      })}
    </FriendListUl>
  );
};
