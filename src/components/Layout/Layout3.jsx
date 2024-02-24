import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout3({ darkMode }) {
  return (
    <div className={`${darkMode ? 'cs_dark' : ''}`}>
      <Header
        logoUrl={darkMode ? '/images/photomanji_white_logo.png' : '/images/photomanji_white_logo.png'}
        cart
        actionBtnText="Getting Started"
        actionBtnUrl="/contact"
      />
      <Outlet />
      <Footer />
    </div>
  );
}
