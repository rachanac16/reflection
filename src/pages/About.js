import { Box, Typography, Grid, IconButton } from '@mui/material';
import React from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Navbar from '../components/Navbar';

function About(props){
    return <Grid container className='App-container' id="about">
        <Grid item container direction="column" xs={12} md={6} lg={6} className="minimal-block-header">
            <Grid item container xs={2}><Navbar scrollTo={props.scrollTo} id="aboutlink"/></Grid>
            <Grid item  xs={1} className="main-header display-flex-end">
                ABOUT ME
            </Grid>
            <Grid item container direction="column" xs={8} md={8} lg={8} className="sub-header display-flex-start" p={2}>
                <Grid item xs={3}>
                    I am a dedicated Software Engineer determined to achieve success in creating, debugging, testing 
                    and deploying systems powered with AI to enhance life experiences in different aspects ranging from 
                    important day-to-day chores to pursuing a hobby. I cherish a fast-paced innovative environment 
                    with excellent interpersonal as well as communication skills.
                </Grid>
                <Grid item xs={2}>
                    I am always looking for inspiration in the fast paced lives led by technology and 
                    how I can assist without handicapping people from achieving goals.
                </Grid>
                <Grid item xs={1} className="center-flex width100">
                    <IconButton onClick={()=>props.scrollTo("#education")}><KeyboardDoubleArrowDownIcon color="buttonColor" sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" }}}/></IconButton>
                </Grid>
            </Grid>
        </Grid>
        <Grid item direction="column" container xs={12} md={6} lg={6} className="bg-primary">
            <Grid item xs={3} md={3} lg={3} className="bg-white"></Grid>
            <Grid item container xs={10} md={6} lg={6}>
                <Grid item container direction="column" xs={2} md={2} lg={2}>
                    <Grid item xs={8} md={8} lg={8} className="bg-white"></Grid>
                    <Grid item xs={4} md={4} lg={4}></Grid>
                </Grid>
                <Grid item xs={8} md={8} lg={8} className="image-container-about"></Grid>
                <Grid item container direction="column" xs={2} md={2} lg={2}>
                    <Grid item xs={8} md={8} lg={8} className="bg-white"></Grid>
                    <Grid item xs={4} md={4} lg={4}></Grid>
                </Grid>
            </Grid>
            <Grid item md={6} lg={3}></Grid>
        </Grid>
    </Grid>;
}

export default About;