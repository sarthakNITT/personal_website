import React,{useState} from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";
import Profile from './IMG_5436.jpeg'
import { MdArrowOutward } from "react-icons/md";
import './App.css'

const App=()=>{
  const [theme, setTheme] = useState(true);
  const clickTheme=()=>{
    setTheme(!theme);
  }
  return(
    <div className="App">
      <div className="header">
        <div className="headerName">Sarthak</div>
        <div className="headerNavBar">
          <div>Project</div>
          <div>About</div>
          <div>Testimonials</div>
        </div>
        <div className="headerContact">
          {theme ? <BsBrightnessHigh onClick={clickTheme} className="headerLogo"/> : <BsBrightnessHighFill onClick={clickTheme} className="headerLogo"/>}
          <div className="headerBtn">Contact Me</div>
        </div>
      </div>
      <div className="home">
        <div className="homeHeading1">Hi, I'm <div className="homeHeading1Name">&nbsp; Sarthak </div></div>
        <div className="homeImageBox">
          <div className="homeHeading">Full-Stack Developer</div>
          <img className="homeImage" src={Profile} alt="MyImage"/>
        </div>
          <div className="homeBtn">Connect with me</div>
      </div>
    </div>
  )
}

export default App;