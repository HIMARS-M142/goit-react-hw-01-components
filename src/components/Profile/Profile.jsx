import PropTypes, { object, string } from 'prop-types';
import {
  ProfileContainer,
  DescriptionProfile,
  ProfileImage,
  ProfileList,
  ProfileUl,
} from './ProfileStyled';
export const Profile = ({ avatar, stats, username, tag, location }) => {
  return (
    <ProfileContainer className="profile">
      <DescriptionProfile className="description">
        <ProfileImage src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </DescriptionProfile>

      <ProfileUl className="stats">
        <ProfileList>
          <span className="label">Followers</span>
          <span className="quantity"> {stats.followers}</span>
        </ProfileList>
        <ProfileList>
          <span className="label">Views</span>
          <span className="quantity"> {stats.views}</span>
        </ProfileList>
        <ProfileList>
          <span className="label">Likes</span>
          <span className="quantity"> {stats.likes}</span>
        </ProfileList>
      </ProfileUl>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
