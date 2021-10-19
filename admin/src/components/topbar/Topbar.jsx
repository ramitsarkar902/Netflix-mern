import React, { useState, useEffect, useContext } from "react";
import "./topbar.css";
import { logout } from "../../context/authContext/apiCalls";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { AuthContext } from "../../context/authContext/AuthContext";

function Topbar() {
  const [slide, setSlide] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const { isFetching, dispatch } = useContext(AuthContext);
  //need to make a logout option
  const handleLogOut = () => {
    //logout(user, dispatch);
  };
  console.log(slide);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">adminHUB</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">3</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          {slide ? (
            <div className="sliding">
              <button onClick={handleLogOut}>logOut</button>
            </div>
          ) : (
            <img
              className="topAvatar"
              src="https://images.news18.com/ibnlive/uploads/2021/04/1618722886_untitled-design-2.jpg"
              alt=""
              onClick={() => setSlide(!slide)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Topbar;
