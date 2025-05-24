import React from "react";
import '../styles/Map.css'
import '../styles/General.css'
import { Sidebar } from "../components/sidebar.js";
import { MapComponent } from "../components/mapComponents.js";

export const Map = () => {
  return (
    <div className="flex h-screen w-screen">
      <MapComponent />
    </div>
  );
};
