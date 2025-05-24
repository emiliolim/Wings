import React, { useState } from "react";
import park from '../images/aldrich-park.jpg';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password });
    // Add your login logic here
  };

  return (
    <div className="logInPage">
      <div className="image8"></div>
      <img className="image6Icon" src={park} alt="" />

      <div className="rectangleParent">
        <div className="groupChild"></div>
        <button className="login" type="submit" onClick={handleSubmit}>Login</button>
      </div>

      <div className="logInPageChild"></div>
      <div className="gameIconsangelOutfit"></div>
      <div className="wings">
        <span className="wings1">Wings</span>
      </div>
      <div className="everyAngelNeedsContainer">
        Every angel needs their wings
      </div>
      <div className="lineMdheartTwotoneIcon"></div>
      <div className="vectorIcon"></div>
      <div className="loginsignUp">Login/Sign Up</div>

      {/* Form Inputs */}
      <form onSubmit={handleSubmit}>
        <div className="logInPageItem">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '30px',
              padding: '0 20px',
              fontSize: '1rem',
              outline: 'none',
              background: 'transparent'
            }}
          />
        </div>

        <label className="username">Username</label>

        <div className="logInPageInner">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '30px',
              padding: '0 20px',
              fontSize: '1rem',
              outline: 'none',
              background: 'transparent'
            }}
          />
        </div>

        <label className="password">Password</label>
      </form>
    </div>
  );
};

export default Login;


