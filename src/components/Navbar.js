import React from 'react';
import { Grid } from '@mui/material';

function Navbar(props){
    return <Grid item container xs={12} className='navbar center-flex' spacing={3} style={{paddingTop:"10px"}}>
    <Grid item>
    <a onClick={()=>props.scrollTo('#home')}>HOME</a>
    </Grid>
    <Grid item>
    <a onClick={()=>props.scrollTo('#about')}>ABOUT</a>
    </Grid>
    <Grid item>
    <a onClick={()=>props.scrollTo('#education')}>EDUCATION</a>
    </Grid>
    <Grid item>
    <a onClick={()=>props.scrollTo('#experience')}>EXPERIENCE</a>
    </Grid>
    <Grid item>
    <a onClick={()=>props.scrollTo('#projects')}>PROJECTS</a>
    </Grid>
  </Grid>;
}

export default Navbar;