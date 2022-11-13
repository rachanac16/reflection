import {React, useState} from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Education from './pages/Education.js';
import Navbar from './components/Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary:{
      main:"#1A2841"
    }
  },
  typography: {
    fontFamily: [
      'Regular'
    ].join(','),
  },
});

function App() {

  const [prevComponent, setPrevComponent] = useState("");

  return <ThemeProvider theme={theme}>
    <div className='app_outside'>
      
      <div className='container'>
        <Navbar/>
        <Home/>
        <About/>
        <Education/>
        <Experience/>
      </div>
    </div>
  </ThemeProvider>
}
export default App;
