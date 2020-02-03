import React from 'react';
import styles from './Profile.module.css';
import PropTypes from 'prop-types';

function ProfileViews({ views }) {
  return (
    <li className={styles.statsItem}>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
  );
}

ProfileViews.propTypes = {
  views: PropTypes.number.isRequired,
};

export default ProfileViews;
