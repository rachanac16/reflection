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
});

function App() {

  const [prevComponent, setPrevComponent] = useState("");

  return <ThemeProvider theme={theme}>
    <div>
      
      <div className='container'>
        <Navbar/>
        <div className='restrictcontainer'>
          <div className='appcontainer'> 
            <Routes>
              <Route path="/reflection" element={<Home/>}/>
              <Route path="/reflection/about" element={<About/>}/>
              <Route path="/reflection/experience" element={<Experience/>}/>
              <Route path="/reflection/education" element={<Education/>}/>
              {/* <Route path="/reflection/others" element={<Others/>}/> */}
            </Routes>
          </div>

        </div>

      </div>
    </div>
  </ThemeProvider>
}
export default App;
