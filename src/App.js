import './App.css';
import {React} from "react";
import { ThemeProvider, createTheme, Grid } from '@mui/material';
import About from './pages/About';
import { hover } from '@testing-library/user-event/dist/hover';

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
    fontFamily: [
      'Primary', 'Secondary'
    ].join(','),
  },
});

const scrollTo = (ref) => {
  const anchor = document.querySelector(ref);
  anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <Grid container className="App-container" id="home">
        <Grid item xs={0} md={1} lg={2}>
        </Grid>
        <Grid item container direction="column" xs={12} md={4} lg={4} className="bg-white">
          <Grid item container xs={0} md={2} lg={2}>
            <Grid item xs={0} md={6} lg={6} className="bg-primary">

            </Grid>
            <Grid item xs={0} md={6} lg={6}>
              
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} lg={8} className="image-container-main">

          </Grid>
          <Grid item container xs={0} md={2} lg={2}>
            <Grid item xs={0} md={6} lg={6} className="bg-primary">

            </Grid>
            <Grid item xs={0} md={6} lg={6}>
              
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row" xs={12} md={7} lg={6} className="minimal-block-header">
          <Grid item container xs={12} spacing={2} className='main-header'>
            RACHANA CHAUDHARI
          </Grid>
          <Grid item container xs={12} className='sub-header' spacing={2}>
            <Grid item>
            <a href="https://rachanac16.github.io/reflection">HOME</a>
            </Grid>
            <Grid item>
            <a onClick={()=>scrollTo('#about')}>ABOUT</a>
            </Grid>
            <Grid item>
            <a href="https://rachanac16.github.io/reflection">EXPERIENCE</a>
            </Grid>
            <Grid item>
            <a href="https://rachanac16.github.io/reflection">EDUCATION</a>
            </Grid>
            <Grid item>
            <a href="https://rachanac16.github.io/reflection">PROJECTS</a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <About scrollTo={scrollTo}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
