import { FriendListUl } from './FriendListStyled';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <FriendListUl className="friend-list">
      <FriendListItem friends={friends} />
    </FriendListUl>
  );
};
