import React from 'react'
import Navbar from '../navbar/navbar';
import { Footer } from '../footer/Footer';

const MainLayout = ({children}) => {
  return (
    <div>
      <Navbar />
    {children}
      <Footer />
    </div>
  )
}

export default MainLayout;
