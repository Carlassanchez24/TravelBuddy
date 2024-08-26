import React from 'react';
import Navbar from '@/components/ui/navbar/Navbar';
import { Outlet } from 'react-router-dom';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App

