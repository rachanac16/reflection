import './App.css';
import {React} from "react";
import { ThemeProvider, createTheme, Grid } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffbd59",
    },
    secondary:{
      main:"#ffffff",
      secondary: "#000000"
    }
  },
  typography: {
    fontFamily: [
      'Primary', 'Secondary'
    ].join(','),
  },
});

function App() {
  return (
    <div className="App">
      <Grid container className="App-container">
        <Grid item xs={0} md={1} lg={2} className="container-1">

        </Grid>
        <Grid item container direction="column" xs={12} md={4} lg={4} className="image-container-cover">
          <Grid item container xs={0} md={2} lg={2}>
            <Grid item xs={0} md={6} lg={6} className="half-color">

            </Grid>
            <Grid item xs={0} md={6} lg={6}>
              
            </Grid>
          </Grid>
          <Grid item xs={12} md={8} lg={8} className="image-container-main">

          </Grid>
          <Grid item container xs={0} md={2} lg={2}>
            <Grid item xs={0} md={6} lg={6} className="half-color">

            </Grid>
            <Grid item xs={0} md={6} lg={6}>
              
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row" xs={12} md={7} lg={6} className="minimal-block-header">
          <Grid item container xs={12} spacing={2} className='main-header'>
            RACHANA CHAUDHARI
          </Grid>
          <Grid item xs={12} className='sub-header' spacing={2}>
          HOME | ABOUT | EXPERIENCE | EDUCATION | PROJECTS
          </Grid>
            {/* <div className='main-header'>
              RACHANA CHAUDHARI
            </div>
            <div className='sub-header'>
              HOME | ABOUT | EXPERIENCE | EDUCATION | PROJECTS
            </div> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
