import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../components/Navbar';

function Home(props){

    return <Grid container className="App-container" id="home">
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
    <Grid item container direction="column" xs={12} md={7} lg={6} className="minimal-block-header">
      <Grid item container xs={6} spacing={2} className='main-header display-flex-end'>
        RACHANA CHAUDHARI
      </Grid>
      <Grid item container xs={1}>
        <Navbar scrollTo={props.scrollTo}/>
      </Grid>
      <Grid item xs={5}></Grid>
    </Grid>
  </Grid>;
}

export default Home;