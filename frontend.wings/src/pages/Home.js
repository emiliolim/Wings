import React from "react";
import {WingsIcon} from '../components/icons'
import park from '../images/aldrich-park.jpg'
import '../styles/Home.css'
import { ExploreButton } from "../components/buttons";
import heart from '../images/heart_for_homepage.png'

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
            <div className="bottom-text-wrapper">
              <p className="bottom-text">
                Need a bathroom or a product station?
              </p>
            </div>
          </div>
        </section>
        <div className="explore-button-wrapper">
          <ExploreButton>
          </ExploreButton>
          <p className="explore-text">Every Angel needs their <span className="bolded-wings">Wings!</span><span><img src={heart} className="heart-home" alt="Heart icon" /></span></p>

        </div>
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
