import React, { useEffect, useState } from 'react';
import { Avatar, Grid, IconButton, Card, CardMedia, CardActions, CardContent, Typography, Button, } from '@mui/material';
import ExperienceData from '../components/ExperienceData';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ExperienceRecord(props){
    
    const [record, setRecord] = useState(ExperienceData[props.id]);

    useEffect(()=>{
        setRecord(ExperienceData[props.id]);
    },[props.id]);

    return <Grid item container xs={12} md={12} lg={12} className="bg-white" p={2}>
                <Grid item xs={2} md={2} lg={2} className="bg-primary dispaly-flex-start">
                    
                    <Avatar
                            alt={record.companyName}
                            src={record.icon}
                            sx={{height:"15vw", width:"100%"}}
                            variant="square"
                        />
                    
                </Grid>
                {/* <Grid item container direction="column" xs={2} md={2} lg={2} className="bg-white">
                    <Grid item xs={2} md={4} lg={4}>
                        
                    </Grid>
                </Grid> */}
                <Grid item container direction="column" xs={10} md={10} lg={10} p={3} spacing={2}>
                    <Grid item className='sub-header-2'>
                        {record.companyName} | {record.location}
                    </Grid>
                    <Grid item className='content'>
                        
                    </Grid>
                    <Grid item className='content'>
                        {record.position}
                    </Grid>
                    <Grid item className='content'>
                        {record.desc}
                    </Grid>
                    <Grid item className='content'>
                        {record.skills}
                    </Grid>
                    <Grid item className="content">
                        <div className='content-italic'>
                        RELEVENT COURSEWORK
                        </div> 
                        <ul>
                            {record.description.map((course)=>(
                                <li style={{paddingBottom:'5px', width:"70%"}}>{course}</li>
                            ))}
                        </ul>
                    </Grid>
                </Grid>
            </Grid>;
}

export default ExperienceRecord;