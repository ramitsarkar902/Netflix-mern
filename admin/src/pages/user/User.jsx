import React from "react";
import "./user.css";
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Beluga Morris</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">beluga69</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1999</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">beluga69@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="beluga69"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Beluga Morris"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="beluga69@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="data:image/jpeg;base64,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"
                  alt="profilepic"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
