import React from "react";
import '../styles/Map.css'
import '../styles/General.css'
import { Sidebar } from "../components/sidebar.js";
import { MapComponent } from "../components/mapComponents.js";
import { WingsIcon } from "../components/icons.js";
import { useNavigate } from 'react-router-dom';
import { ChatIcon } from '../components/icons.js'
import ChatButton from "../components/chatbutton.js";

/*
<div className="top-grid">
      <section className="top-bar">
        <div className="WingsLogo" onClick={() => { navigate("/"); } } style={{ cursor: "pointer" }}>
          <WingsIcon />
          <p className="WingsText" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Wings</p>
        </div>
        <button className="Chat-Button" style={{ cursor: "pointer" }}>
        </button>
      </section>
    </div><div className="bottom-grid">
*/
export const Map = () => {
  const navigate = useNavigate();
  return (
    <main className="map-container"> 
        <div className="logo">
          <div className="wings-logo" onClick={() => { navigate("/"); } } style={{ cursor: "pointer" }}>
            <WingsIcon />
            <p className="WingsText" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>Wings</p>
          </div>
        </div>
        <div className="">
            <MapComponent/>
          </div>
        
      </main>
  );
};
