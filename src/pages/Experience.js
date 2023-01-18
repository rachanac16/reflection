import { Avatar, Grid, IconButton, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Navbar from '../components/Navbar';
import ExperienceData from '../components/ExperienceData';
import ExperienceRecord from '../components/ExperienceRecord';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
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
        setCurrentRecord(currentRecord+1);
    }
    
    const decreaseCurrentRecord= ()=>{
        if(currentRecord>1){
            setShowArrowLeft(true);
        }else{
            setShowArrowLeft(false);
        }
        setCurrentRecord(currentRecord-1);
    }

    const resetCurrentRecord=()=>{
        setCurrentRecord(0);
        setShowArrowLeft(false);
        setShowArrowRight(true);
    }
    

    return <Grid container className='App-container' id="experience">
                <Grid item container xs={12} md={6} lg={6} className="bg-white" p={5}>
                    <Navbar scrollTo={props.scrollTo}/>
                </Grid>
                <Grid item xs={12} md={6} lg={6} className="main-header center-flex" p={5}>
                        EXPERIENCE
                </Grid>
                <Grid item container xs={12} md={12} lg={12} className="bg-white">                       
                    <Grid item container xs={12} md={12} lg={12} className='content center-flex' p={2}>
                        <Grid item className="divider height100 padding2" xs={1} md={3} lg={2}></Grid>
                        <Grid item container xs={10} md={6} lg={4} className='content-big center-flex' spacing={0}>
                            {showArrowLeft &&
                                <Grid item>
                                        <IconButton onClick={()=>decreaseCurrentRecord()}>
                                            <KeyboardArrowLeftIcon color="buttonColor" sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" }}}/>
                                        </IconButton>
                                            
                                </Grid>
                            }
                            <Grid item>{ExperienceData[currentRecord].date}</Grid>
                            <Grid item>
                                {showArrowRight?
                                <IconButton onClick={()=>increaseCurrentRecord()}>
                                        <KeyboardArrowRightIcon color="buttonColor" sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" }}}/>
                                </IconButton>
                                        :
                                <IconButton onClick={()=>resetCurrentRecord()}>
                                        <RestartAltIcon color="buttonColor" sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" }}}/>
                                    </IconButton>
                                        
                                    }
                            </Grid>
                        </Grid>
                        <Grid item className="divider height100" xs={1} md={3} lg={6}></Grid>
                    </Grid>
                </Grid>
                <ExperienceRecord id={currentRecord}/>

                <Grid item container xs={12} md={12} lg={12} className="center-flex bg-white">
                    <IconButton onClick={()=>props.scrollTo("#projects")}><KeyboardDoubleArrowDownIcon color="buttonColor" sx={{ fontSize: "30px", "&:hover": { color: "#c0b3f3" }}}/></IconButton>
                </Grid>
            </Grid>;
}

export default Experience;