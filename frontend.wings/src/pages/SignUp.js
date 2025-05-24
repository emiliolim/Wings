import React, { useState } from "react";
import park from "../images/aldrich-park.jpg";
import "../styles/SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Submitted:", { username, email, password });
    // Add API call or backend logic here
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
      <div className="loginsignUp">Log In</div>

      <form onSubmit={handleSubmit} className="formContainer">
        <label className="formLabel">Username</label>
        <input
          type="text"
          className="formInput"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter username"
        />

        <label className="formLabel">Email</label>
        <input
          type="email"
          className="formInput"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />

        <label className="formLabel">Password</label>
        <input
          type="password"
          className="formInput"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />

        <label className="formLabel">Confirm Password</label>
        <input
          type="password"
          className="formInput"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm password"
        />

        <button type="submit" className="submitButton">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
