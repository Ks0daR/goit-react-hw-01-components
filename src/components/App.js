import React from 'react';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import userData from '../database/user.json';
import statData from '../database/statistical-data.json';

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <Statistics title="Upload Stats" data={statData} />
    </>
  );
}
