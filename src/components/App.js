import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userProfile from '../database/user.json';
import stats from '../database/statistical-data.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        name={userProfile.name}
        tag={userProfile.tag}
        location={userProfile.location}
        avatar={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics title="Upload Stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
