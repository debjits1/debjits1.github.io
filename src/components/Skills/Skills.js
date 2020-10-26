import Deck from "../cards/Deck";
import React from 'react';
import './Skills.css';
const Skills = () => {
    return (
        <div className="skills">
            <div className="content">
                <p className="body-big">
                    Here are some of the technologies from my <span className="color-2-content">tech-stack.</span>
                </p>
                <p className="body-big"><span className="color-2-content">Swipe</span> the cards to check them.</p>
            </div>
            <Deck></Deck>
        </div>
    );
}
 
export default Skills;