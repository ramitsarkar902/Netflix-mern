import React, { useState } from "react";
import "./login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    //api calls login send data
  };
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="loginButton" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
