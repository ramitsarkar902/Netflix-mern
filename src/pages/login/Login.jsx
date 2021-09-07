import "./login.scss";
import { useState } from "react";

export default function Login() {
  const [hover, setHover] = useState(true);

  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <div className="header">
            <h1 onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
              Sign In
            </h1>
            {hover ? (
              <h5
                style={{
                  margin: "12px 0px 0px",
                  color: "green",
                }}
              >
                The Chill Life is just one click away!
              </h5>
            ) : (
              <h5></h5>
            )}
          </div>

          <input type="email" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
