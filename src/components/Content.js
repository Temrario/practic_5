import React from 'react';
import './styles/Content.css';

const Content = ({ title }) => {
  return (
    <main className="content">
      {title}
    </main>
  );
};

export default Content;