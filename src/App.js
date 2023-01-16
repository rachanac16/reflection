import './App.css';
import {React} from "react";
import { ThemeProvider, createTheme, Grid } from '@mui/material';
import About from './pages/About';
import { hover } from '@testing-library/user-event/dist/hover';
import Home from './pages/Home';
import Education from './pages/Education';
import Experience from './pages/Experience';

const theme = createTheme({
  palette: {
    primary: {
      main: "#c0b3f3",
    },
    secondary:{
      main:"#ffffff",
      secondary: "#000000"
    },
    buttonColor:{
      main:"#000000"
    }
  },
  typography: {
    fontFamily:'Cormorant Garamond, serif'
  },
});

const scrollTo = (ref) => {
  const anchor = document.querySelector(ref);
  anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Home scrollTo={scrollTo}/>
      <About scrollTo={scrollTo}/>
      <Education scrollTo={scrollTo}/>
      <Experience scrollTo={scrollTo}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
