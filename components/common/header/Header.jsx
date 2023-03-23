import React from 'react';
import { Navbar } from '../../common';
import './Header.css';


function Header() {
  return (
    <div className="header">

      <a href="https://pixelcoblog.com" className="link">
        <img src="https://pixelcoblog.com/wp-content/uploads/2009/10/2-tipograf-manga.jpg" alt="Logo" className="logo" />
      </a>

      <div className='nav-bar'>
        <Navbar/>
      </div>
      
      <div className="social-media">
        <ul>
          <li><a href="#"><i className="fab fa-facebook"></i></a></li>
          <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          <li><a href="#"><i className="fas fa-envelope"></i></a></li>
        </ul>
      </div>

    </div>
  );
}

export default Header;
