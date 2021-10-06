import React from 'react';
import img2 from '../images/Share.png';
import './About.css';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <img src={img2} alt="" className="img2"/>
            <p>MindFull is a project that will allow people from different cultures to share smart ideas. An open place for open discussions. A biologist can find a friendly platform to expose their ideas while a songwriter will use the same platform to publish their new songs. Mindful should have an interactive interface that will allow people from around the world to share their ideas. </p>
        </div>
    )
}
