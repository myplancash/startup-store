import React from 'react'
import { Outlet } from 'react-router-dom'
import Directory from '../../components/Directory/Directory';

function Home() {
  return (
    <div>
      <Outlet />
      <Directory/>
    </div>
  ); 
}

export default Home;
