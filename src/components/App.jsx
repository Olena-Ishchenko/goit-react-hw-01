// import { useState } from 'react'

import userData from '../userData.json';
import Profile from './Profile/Profile';
import '../App.css';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
};

export default App;
