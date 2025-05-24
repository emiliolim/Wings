import React, { useState } from "react";
import park from "../images/aldrich-park.jpg";
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    // Add your login logic here (API call, validation, etc.)
  };

  return (
    <div className="logInPage">
      <div className="image8" />
      <img className="image6Icon" src={park} alt="Aldrich Park" />
      <div className="gameIconsangelOutfit" />
      <div className="wings"><span className="wings1">Wings</span></div>
      <div className="everyAngelNeedsContainer">Every angel needs their wings</div>
      <div className="lineMdheartTwotoneIcon" />
      <div className="vectorIcon" />
      <div className="loginsignUp">Log In or Sign Up</div>

      <form onSubmit={handleSubmit} className="formContainer">
        <label className="formLabel">Username</label>
        <input
          type="text"
          className="formInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <label className="formLabel">Password</label>
        <input
          type="password"
          className="formInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <button type="submit" className="submitButton">Log In</button>
      </form>
    </div>
  );
};

export default Login;
