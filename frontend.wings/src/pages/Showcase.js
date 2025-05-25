import React from "react";

import {WingsIcon, ArrowIcon} from '../components/icons'
import { ExploreButton } from "../components/buttons";
import { InfoCard } from "../components/mapComponents";

export const Showcase = () => {
  return (
    <main className="">
        <h1>
            Components showcase page
        </h1>

        <div>
            <WingsIcon/>
            <ArrowIcon/>
        </div>
        <div>
            <ExploreButton/>
        </div>
        
        <div>
          <h1>
            Button
          </h1>
          <h1>
            Chat box
          </h1>
          <h1>
            Location widget
          </h1>
          
         
        </div>
    </main>
  );
};
