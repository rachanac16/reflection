import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Education from './pages/Education.js';
import Others from './pages/Others.js';
import Navbar from './components/Navbar.js';
import { ThemeProvider, createTheme } from '@mui/material';
import { palette } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

function App() {
  
  return <ThemeProvider theme={theme}>
    <div>
      
      <div className='container'>
        <Navbar/>
        <div className='homecontainer'> 
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
  </ThemeProvider>
}
export default App;
