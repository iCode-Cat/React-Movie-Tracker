import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header-container">
      <div className="nav-logo">
        <h1>WATCHER</h1>
      </div>

      <div className="nav-profile">
        <div className="username">admin</div>
        <div className="profile-img">
          <img src='https://m.media-amazon.com/images/S/sash/9FayPGLPcrscMjU.png' alt="profile" />
        </div>
      </div>
    </header>
  );
};




export default Header
