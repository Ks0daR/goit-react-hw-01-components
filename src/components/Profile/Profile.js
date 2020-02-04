import React from 'react';
import ProfileFollowers from './ProfileFollowers';
import ProfileViews from './ProfileViews';
import ProfileLikes from './ProfileLikes';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  const { followers, views, likes } = stats;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={name} className={styles.avatar} />
        <p className="name">{name}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <ProfileFollowers followers={followers} />
        <ProfileViews views={views} />
        <ProfileLikes likes={likes} />
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
