import React from "react";
import {WingsIcon} from '../components/icons'
import '../styles/General.css'
import park from '../images/aldrich-park.png'

export const Home = () => {
  return (
    <main className="main-container">
        {/*Left Side*/}
        <div>
          <WingsIcon />
        </div>
        {/*Right Side Image*/}
        <div>
          <img src={park} alt="Description of image" />
        </div>
        

        <div>
          
        </div>
    </main>
  );
};
