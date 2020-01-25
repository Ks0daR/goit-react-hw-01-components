import React from 'react';
import Profile from './Profile/Profile';
import userData from '../database/user.json';

export default function App() {
  return (
    <>
      <Profile user={userData} />
    </>
  );
}
