import { Avatar, Grid, IconButton, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Navbar from '../components/Navbar';
import ExperienceData from '../components/ExperienceData';
import ExperienceRecord from '../components/ExperienceRecord';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

function Experience(props){

    const [currentRecord, setCurrentRecord] = useState(0);
    const [showArrowLeft, setShowArrowLeft] = useState(false);
    const [showArrowRight, setShowArrowRight] = useState(true);

    const increaseCurrentRecord=()=>{
       if(currentRecord<ExperienceData.length-2){
            setShowArrowRight(true);
            setShowArrowLeft(true);
        }else{
            setShowArrowRight(false);
        }
        const progress = document.querySelector("#progress");
        progress.style.width = (25*(currentRecord+2)) + '%';
        setCurrentRecord(currentRecord+1);
    }
    
    const decreaseCurrentRecord= ()=>{
        if(currentRecord===ExperienceData.length-1){
            setShowArrowRight(true);
        }else if(currentRecord>1){
            setShowArrowLeft(true);
        }else{
            setShowArrowLeft(false);
        }
        setCurrentRecord(currentRecord-1);
        const progress = document.querySelector("#progress");
        progress.style.width = (25*(currentRecord)) + '%';
    }

    const resetCurrentRecord=()=>{
        setCurrentRecord(0);
        setShowArrowLeft(false);
        setShowArrowRight(true);
        const progress = document.querySelector("#progress");
        progress.style.width = 25 + '%';
    }
    

    return <Grid container className='App-container' id="experience">
                <Grid item container xs={12} md={6} lg={6} className="bg-white" p={5}>
                    <Navbar scrollTo={props.scrollTo}/>
                </Grid>
                <Grid item xs={12} md={6} lg={6} className="main-header center-flex" p={5}>
                        EXPERIENCE
                </Grid>
                <Grid item xs={12} md={12} lg={12} className="bg-white" spacing={0}>
                    <div className='progress' id="progress"></div>
                </Grid>
                <Grid item container xs={12} md={12} lg={12} className="bg-white">                       
                    <Grid item container xs={12} md={12} lg={12} className='content center-flex letter-spacing' p={2}>
                        <Grid item className="divider height100" xs={1} md={3} lg={2}></Grid>
                        {/* <Grid item container className='content-big center-flex' spacing={0}></Grid>
                        <Grid item container className='content-big center-flex' spacing={0}></Grid>
                        <Grid item container className='content-big center-flex' spacing={0}></Grid> */}
                        <Grid item container xs={10} md={6} lg={5} className='content-big center-flex' spacing={0}>
                            {showArrowLeft &&
                                <Grid item xs={1} md={1} lg={1} className='content-big center-flex'>
                                        <IconButton onClick={()=>decreaseCurrentRecord()}>
                                            <KeyboardDoubleArrowLeftIcon color="buttonColor" sx={{ fontSize: "40px", "&:hover": { color: "#c0b3f3" }}}/>
                                        </IconButton>
                                            
                                </Grid>
                            }
                            <Grid item xs={10} md={10} lg={10} className='center-flex'>{ExperienceData[currentRecord].date}</Grid>
                            <Grid item xs={1} md={1} lg={1} className='center-flex'>
                                {showArrowRight?
                                <IconButton onClick={()=>increaseCurrentRecord()}>
                                        <KeyboardDoubleArrowRightIcon color="buttonColor" sx={{ fontSize: "40px", "&:hover": { color: "#c0b3f3" }}}/>
                                </IconButton>
                                        :
                                <IconButton onClick={()=>resetCurrentRecord()}>
                                        <RestartAltIcon color="buttonColor" sx={{ fontSize: "40px", "&:hover": { color: "#c0b3f3" }}}/>
                                    </IconButton>
                                        
                                    }
                            </Grid>
                        </Grid>
                        <Grid item className="divider height100" xs={1} md={3} lg={5}></Grid>
                    </Grid>
                </Grid>
                <ExperienceRecord id={currentRecord}/>

                <Grid item container xs={12} md={12} lg={12} className="center-flex bg-primary">
                    <IconButton onClick={()=>props.scrollTo("#projects")}><KeyboardDoubleArrowDownIcon color="secondary" sx={{ fontSize: "30px", "&:hover": { color: "#000000" }}}/></IconButton>
                </Grid>
            </Grid>;
}

export default Experience;