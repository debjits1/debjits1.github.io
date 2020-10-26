import React from 'react';
import "./Contact.css";
const Contact = () => {
    return ( 
        <div className="contact">
            <div className="body-big text-center heading">
                Let's talk
            </div>
            <div className="text-center socialLinks">
                <a rel="noopener noreferrer" className="body-1" href="https://www.linkedin.com/in/frontend-ninja/" target="_blank">LinkedIn</a>
                <a rel="noopener noreferrer" className="body-1" href="https://github.com/debjits1" target="_blank">Github</a>
            </div>
        </div>
    );
}
 
export default Contact;