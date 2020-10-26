import React from 'react';
import "./About.css";
const About = () => {
    return ( 
        <div className="about">
            <div className="aboutLeft">
                <div className="imageCircle"></div>
            </div>
            <div className="aboutRight">
                <p className="body-big">I am a <span className="color-2-content">Web developer / UI developer</span> from India.</p>
                <p className="body-big">I have 6 years of experience as a developer and love working with <span className="color-2-content">frontend technologies</span> and frameworks. </p>
            </div>
        </div>
    );
}
 
export default About;