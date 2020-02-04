import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

function FriendListItem({ avatar, isOnline, name }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.status} />
      <img className="avatar" alt={name} src={avatar} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
