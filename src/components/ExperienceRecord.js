import React, { useState } from 'react';
import { Avatar, Grid, IconButton, Card, CardMedia, CardActions, CardContent, Typography, Button, } from '@mui/material';
import ExperienceData from '../components/ExperienceData';

function ExperienceRecord(props){
    
    return <Grid item container xs={12} md={12} lg={12} className="center-flex" p={2}>
        {
            ExperienceData.map((record)=>(
                
                <Grid item xs={12} md={6} lg={3} className="center-flex" p={2}>
                <Card sx={{ maxWidth: 500, minHeight:400 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={record.icon}
                    title={record.companyName}
                />
                <CardContent className='content'>
                    <Typography variant="h5" component="div">
                    {record.companyName}
                    </Typography>
                    <Typography variant="body1" component="div" color="text.secondary">
                        {record.date}
                    </Typography>
                    
                 {record.description}
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
            ))
        }
    </Grid> ;
}

export default ExperienceRecord;