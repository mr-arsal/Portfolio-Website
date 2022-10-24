// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import AboutME from './Components/AboutMe'
import Contact from './Components/Contact'
// import ALert from './Components/Alert'
import React, { useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Alert from './Components/Alert';

function App() {
 
  const [mode, setMode] = useState('light');
  

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = 'rgb(25, 25, 25)'
      
     
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
     
    }
  }

 

  return (
    <>
    <div>
      <BrowserRouter>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/" element={<LandingPage mode={mode}/>} />
          <Route path="/aboutme" element={<AboutME mode={mode}/>} />
          <Route path="/contact" element={<Contact mode={mode}/>} />
        </Routes>
      </BrowserRouter>

      
      
      
    </div>
    </>
  );
}

export default App;
