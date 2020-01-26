import React from 'react';
import styles from './FriendListItem.module.css';
import PropTypes from 'prop-types';

function FriendListItem({ friends }) {

  return friends.map(friend => (
    <li
      key={friend.id}
      className={friend.isOnline ? styles.online : styles.item}
    >
      <span className="status"></span>
      <img className="avatar" src={friend.avatar} alt="" width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendListItem;
