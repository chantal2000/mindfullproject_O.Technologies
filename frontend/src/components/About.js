import React from 'react';
import img2 from '../images/Share.png';
import './About.css';

export default function About() {
    return (
        <div>
            <h1>About</h1>
            <img src={img2} alt="" className="img2"/>
            <p>Mndfull is an open place that allows people from different cultures to share smart ideas. An open place for open discussions. A biologist can find a friendly platform to expose their ideas while a songwriters us it to publish their new songs. </p>
        </div>
    )
}
