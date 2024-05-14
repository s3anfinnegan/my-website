import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
      </div>
      <div className="header-link">
      <a href="/resume.pdf" download>Download CV</a>
        <a href="https://linkedin.com/in/sean-finnegan-/">Connect</a>
        <a href="mailto:sean2001finnegan@gmail.com">Contact</a>
      </div>
    </div>
  );
}

export default Header;