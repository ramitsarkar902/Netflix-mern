import React, { useState } from "react";
import "./navbar.scss";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link className="link" to="/">
            <span>Home</span>
          </Link>

          <Link to="/series" className="link">
            <span>Series</span>
          </Link>

          <Link to="/movies" className="link">
            <span>Movies</span>
          </Link>

          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />

          <span className="limited">KID</span>
          <Notifications className="icon " />
          <img
            src="https://www.pngitem.com/pimgs/m/87-877270_logo-icon-profile-png-transparent-png.png"
            alt="profile logo"
          />
          <div className="profile">
            <ArrowDropDown className="icon limited" />
            <div className="options">
              <span>Settings</span>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
