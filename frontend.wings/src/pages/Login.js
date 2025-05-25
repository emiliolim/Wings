import React, { useState } from "react";
import park from "../images/aldrich-park.jpg";
import { WingsIcon } from "../components/icons";
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {API_URL} from "../Api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Logging in with:", { username, password });
    if(!username || !password)
    {
      alert("Username or password is missing");
      return;
    }
    console.log("Login Attempt Successful");
    const formData = new FormData();

    formData.append('username', username);
    formData.append('password', password);
    const response = await axios.post(`${API_URL}/login`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      },
    });

    const data = response.data;
    if(response.status == 200)
    {
      localStorage.setItem('token', data.token);
      alert("Login successful");
      navigate('/map');
    }
    else
    {
      alert("Login Unsuccessful...");
    }
  };

  return (
    <main className="main_container">
      {/*Left Side*/}
      <section className="left-grid">
        <section className="top-bar">
        <div className="WingsLogo" onClick={() => {navigate("/")}} style={{ cursor: "pointer" }}>
          <WingsIcon />
          <p className="WingsText">Wings</p>
          </div>
          <button className="LoginSignUp" onClick={() => {navigate("/signup")}}>
            Sign up
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
        </section>
        
      </section>
      <section className="right-grid">
       {/*Right Side Image*/}
        <div>
          <img src={park} alt="Description of image" />
        </div>
      </section>
    </main>
    
  );
};

export default Login;

