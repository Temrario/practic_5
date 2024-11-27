import React from 'react';
import Menu from './Menu';
import './styles/Footer.css';

const Footer = () => {
  const footerMenu = [
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'Terms of Service', url: '/terms' },
    { text: 'Support', url: '/support' },
  ];

  return (
    <footer className="footer">
      <Menu list={footerMenu} />
    </footer>
  );
};

export default Footer;
