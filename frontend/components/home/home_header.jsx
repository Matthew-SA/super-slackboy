import React from 'react';
import { Link } from 'react-router-dom';

const HomeHeader = () => {

  return (
    <div className="home-header">

      <ul className="option-list">
        <Link to="/" className="nav-logo">
          <img src={window.logo} className="logo" />
        </Link>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <ul className="user-links">
        <li>
          <Link to="/login">Sign in</Link>
        </li>
        <li>
          <Link to="/signup">
            <button className="purple-button" style={{ height: "42px" }}>
              GET STARTED
                </button>
          </Link>
        </li>
      </ul>
      
    </div> 
  )
}

export default HomeHeader;