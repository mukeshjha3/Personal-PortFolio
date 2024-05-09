import React, { useContext } from 'react';
import './Experience.css';
import { themeContext } from '../ToggleContext/Context';

const Experience = () => {
  const { darkMode, setDarkMode } = useContext(themeContext);

  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
        <span  style={{color: darkMode?'white':''}}>years </span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>Projects</span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3+</div>
        <span  style={{color: darkMode?'white':''}}>worked</span>
        <span>Companies</span>
      </div>
    </div>
  );
};

export default Experience;
