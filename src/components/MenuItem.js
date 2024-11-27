import React from 'react';
import './styles/MenuItem.css';

const MenuItem = ({ text, url }) => {
  const isExternal = url && !url.startsWith(window.location.origin);

  return (
    <li className="menu-item">
      {url ? (
        <a
          href={url}
          target={isExternal ? '_blank' : '_self'}
          rel={isExternal ? 'noopener noreferrer' : ''}
        >
          {text}
        </a>
      ) : (
        <span>{text}</span>
      )}
    </li>
  );
};

export default MenuItem;
