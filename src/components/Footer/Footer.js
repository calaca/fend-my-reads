import React from 'react';
import reactIcon from '../../icons/react-icon.svg';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p className="footer-text">made with <img className="footer-icon" src={reactIcon} alt="React" title="React" /> by <a className="footer-link" href="https://calaca.github.io">calaca</a></p>
    </footer>
  )
};

export default Footer;
