import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

function ProfileLikes({ likes }) {
  return (
    <li className={styles.statsItem}>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  );
}

ProfileLikes.propTypes = {
  likes: PropTypes.number.isRequired,
};

export default ProfileLikes;
