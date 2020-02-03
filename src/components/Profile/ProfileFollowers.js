import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

function ProfileFollowers({ followers }) {
  return (
    <li className={styles.statsItem}>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
  );
}

ProfileFollowers.propTypes = {
  followers: PropTypes.number.isRequired,
};

export default ProfileFollowers;
