import React from 'react'
import {ArrowIcon} from '../components/icons'
import '../styles/Buttons.css'


export const ExploreButton = ({onClick, children, disabled}) => {
    return (
        <button className="explore-button"
        onClick={onClick}
        disabled={disabled}
        >
            Explore Map
            <div className="icon-circle">
                <ArrowIcon/>
            </div>
            
        </button>
    );
};
    

