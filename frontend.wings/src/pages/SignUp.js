import React, { useState } from "react";
import park from "../images/aldrich-park.jpg";
import "../styles/SignUp.css";
import {add_user} from '../Api.js';
import {useNavigate} from 'react-router-dom';
import {WingsIcon} from '../components/icons'


const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Submitted:", { username, email, password });
    const formData = new FormData()

    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);

    try
    {
      await add_user(formData);
      navigate('/map');
    }
    catch(error)
    {
      console.error("error adding user", error);
    }
  };

  return (
    <main className="main_container">
      {/* Left Side */}
      <section className="left-grid">
        <section className="top-bar">
          <div
            className="WingsLogo"
            onClick={() => {
              navigate("/");
            }}
            style={{ cursor: "pointer" }}
          >
            <WingsIcon />
            <p className="WingsText">Wings</p>
          </div>
          <button
            className="LoginSignUp"
            onClick={() => {
              navigate("/login");
            }}
          >
            Back to Login
          </button>
        </section>

        <section className="middle-bar">
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

            <button type="submit" className="submitButton">
              Sign Up
            </button>
          </form>
        </section>
      </section>

      {/* Right Side */}
      <section className="right-grid">
        <div>
          <img src={park} alt="Aldrich Park" />
        </div>
      </section>
    </main>
  );
};

export default SignUp;
