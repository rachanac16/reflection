import * as React from 'react';
import { AppBar, Menu, MenuItem, Typography, Box, Toolbar, Grid, Icon } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Experience from './pages/Experience.js';
import Others from './pages/Others.js';
import Navbar from './components/Navbar.js';

function App() {
  
  return <div>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/reflection" element={<Home/>}/>
        <Route path="/reflection/about" element={<About/>}/>
        <Route path="/reflection/experience" element={<Experience/>}/>
        <Route path="/reflection/others" element={<Others/>}/>
      </Routes>
    </div>
  </div>
}
export default App;
