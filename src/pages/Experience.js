import { Avatar, Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Navbar from '../components/Navbar';
import ExperienceData from '../components/ExperienceData';
import ExperienceRecord from '../components/ExperienceRecord';

function Experience(props){

    return <Grid container direction="column" className='bg-primary width100' id="experience">
    <Grid item container xs={2} md={2} lg={2}>
        <Grid item container xs={12} md={6} lg={6} className="bg-white" p={5}>
            <Navbar scrollTo={props.scrollTo}/>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className="main-header center-flex" p={5}>
                EXPERIENCE
        </Grid>
    </Grid>
    <Grid item container xs={12} md={12} lg={12} className="bg-primary" spacing={1}>
        <ExperienceRecord/>
    </Grid>
    <Grid item container xs={12} md={12} lg={12} className="center-flex bg-white" p={5}>
        <IconButton onClick={()=>props.scrollTo("#projects")}><KeyboardDoubleArrowDownIcon color="primary" sx={{ fontSize: "30px", "&:hover": { color: "#000000" }}}/></IconButton>
    </Grid>
</Grid>;
}

export default Experience;