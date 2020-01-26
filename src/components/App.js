import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import userData from '../database/user.json';
import statData from '../database/statistical-data.json';
import friends from '../database/friends.json'
import transactions from '../database/transactions.json';

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <Statistics title="Upload Stats" data={statData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </>
  );
}
