import React from 'react';
import './Body.css';
import { FaGraduationCap, FaLaptop, FaLightbulb } from 'react-icons/fa';

const Body = () => {
  return (
    <div className="main">
    <div className="hero-text">
      <h1>Hi, I'm Seán</h1>
      <p>Fáilte go dtí mo leathanach tuirlingthe!</p>
      <div className="body-text">
      <ul>
        <li><FaLaptop /> Software engineer @ Fidelity Investments</li>
        <li><FaGraduationCap /> Graduate of BEng (ECE) @ <a href="https://www.universityofgalway.ie/courses/undergraduate-courses/electronic-and-computers.html" target="_blank" rel="noopener noreferrer">University of Galway</a></li>
        <li><FaLightbulb /> Startup founder & engineer @ <a href="https://www.f6s.com/company/receipt-relay#about" target="_blank" rel="noopener noreferrer">Receipt Relay</a>, <a href="https://www.breakthroughmaths.ie/" target="_blank" rel="noopener noreferrer">Breakthrough Maths</a></li>
      </ul>
    </div>
    </div>
    </div>
  );
}

export default Body;