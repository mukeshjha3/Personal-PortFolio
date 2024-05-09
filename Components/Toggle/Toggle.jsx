import React, { useContext } from "react";
import "./Toggle.css";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { themeContext } from "../ToggleContext/Context";

const Toggle = () => {

    let {darkMode , setDarkMode}=useContext(themeContext);

  const handleClick = () => {
    console.log(`Theme Changed button has been clicked....`);
    setDarkMode((previous)=>!previous)
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
