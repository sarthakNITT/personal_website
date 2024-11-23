import React,{useState} from "react";
import { BsBrightnessHigh } from "react-icons/bs";
import { BsBrightnessHighFill } from "react-icons/bs";
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
    </div>
  )
}

export default App;