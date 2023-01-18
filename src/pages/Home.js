import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import Navbar from '../components/Navbar';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';

function Home(props){
  
    const openInNewTab = url => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    return <Grid container className="App-container" id="home">
            <Grid item xs={0} md={1} lg={2}></Grid>
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
                <Navbar scrollTo={props.scrollTo} id="homelink"/>
              </Grid>
              <Grid item xs={5} className="display-flex-start">
                <IconButton color="buttonColor" onClick={()=>openInNewTab("https://www.linkedin.com/in/rachana-chaudhari/")}><LinkedInIcon sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" } }}/></IconButton>
                <IconButton color="buttonColor" onClick={()=>openInNewTab("https://github.com/rachanac16")}><GitHubIcon sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" } }}/></IconButton>
                <IconButton color="buttonColor" onClick={()=>openInNewTab("mailto:rc774@cornell.edu")}><EmailIcon sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" } }}/></IconButton>
                <IconButton color="buttonColor" onClick={()=>openInNewTab("https://drive.google.com/file/d/1BMvEDBSyfUHtTUZ2qkFHyVNlF2ShcFrN/view?usp=share_link")}><SubjectIcon sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" } }}/></IconButton> 
              </Grid>
            </Grid>
          </Grid>;
}

export default Home;