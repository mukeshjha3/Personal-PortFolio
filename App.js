import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import PortFolio from "./Components/Portfolio/PortFolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Components/ToggleContext/Context";
import { useEffect, useState } from "react";

function App() {

const [darkMode, setDarkMode] = useState(true);

useEffect(() => {
  console.log("App component has rendered again...");
}, [darkMode])


  return (
    <themeContext.Provider value={{darkMode,setDarkMode}}>
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <PortFolio />
      <Contact />
      <Footer />
    </div>
    </themeContext.Provider>
  );
}

export default App;
