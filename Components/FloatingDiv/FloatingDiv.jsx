import React, { useContext } from "react";
import "./FloatingDiv.css";
import { themeContext } from "../ToggleContext/Context";

const FloatingDiv = ({ image, text1, text2 }) => {
  const { darkMode, setDarkMode } = useContext(themeContext);
  return (
    <div className="floatingdiv">
      <img src={image} alt="Crown_png" />
      <span style={{ color: darkMode ? "var(--gray)" : "black",
        fontSize: darkMode ? '19px' : '16px'
       }}>
        {text1}
        <br />
        {text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
