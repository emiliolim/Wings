import React from "react";
import {WingsIcon} from '../components/icons'
import park from '../images/aldrich-park.jpg'
import '../styles/Home.css'

export const Home = () => {
  return (
    <main className="main_container">
      {/*Left Side*/}
      <section className="left-grid">
        <section className="top-bar">
          <div className="WingsLogo">
          <WingsIcon />
          <p className="WingsText">Wings</p>
          </div>
          <button className="LoginSignUp">
            Login/Sign up
          </button>
        </section>
        <section className="middle-bar">
          <div className="main-text-wrapper">
            <p className="main-text">
              Let's help you find your next stop.
            </p>
          </div>
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
