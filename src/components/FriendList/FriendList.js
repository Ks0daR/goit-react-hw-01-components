import React from 'react';
import FriendListItem from './FriendListItem';

function FriendList({ avatar, name, isOnline }) {
  console.log(avatar);
  return (
    <ul class="friend-list">
      <FriendListItem friends={avatar} />
    </ul>
  );
}

export default FriendList;
