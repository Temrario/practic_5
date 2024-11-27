import React from 'react';
import './styles/Footer.css';

const Footer = ({ title }) => {
  return (
    <footer className="footer">
      {title}
    </footer>
  );
};

export default Footer;