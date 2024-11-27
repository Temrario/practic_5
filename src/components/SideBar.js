import React from 'react';
import Menu from './Menu';
import './styles/SideBar.css';

const SideBar = () => {
  const menuItems = [
    { text: 'Home', url: '/' },
    { text: 'About Us', url: '/about' },
    { text: 'External Link', url: 'https://google.com' },
    { text: 'No Link' },
  ];

  return (
    <aside className="sidebar">
      <Menu list={menuItems} />
    </aside>
  );
};

export default SideBar;
