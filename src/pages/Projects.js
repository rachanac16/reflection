import { Card, CardContent, CardHeader, CardMedia, Grid, Typography, IconButton} from '@mui/material';
import React from 'react';
import onlineprintshop from './../assets/onlineprintshop.jpg';
import skinscanapi from './../assets/skinscanapi.jpg';
import MIB from './../assets/MIB.jpg';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

function Projects(){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return <div id="projects" className='project_container '>
        <Grid container spacing={5}>
            <Grid item xs={12}>
                <Typography variant='h3'>
                    <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString("Projects").start();
                    }} 
                    />
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500, minHeight:550 }}>
                    <CardMedia component="img"
                        height="194"
                        image={skinscanapi}
                        alt="Skin Scan API"/>
                    <CardHeader title="Skin Scan API" subheader="Jun 2021 - Aug 2021"/>
                    <CardContent>
                    Developed an API that classifies an image of a skin section into different skin diseases and informs if it is normal, built using flask
framework in python and deployed the CNN model in Azure Cloud
                    </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500, minHeight:550 }}>
                    <CardMedia component="img"
                        height="194"
                        image={MIB}
                        alt="MIB"/>
                    <CardHeader action={
                        <IconButton color="secondary" onClick={()=>openInNewTab("https://drive.google.com/file/d/1iBr5EFQnRm7ZSppvwi0ZB4nDpTv9HUql/view?usp=share_link")}><PictureAsPdfIcon sx={{ fontSize: "30px" }}/></IconButton>
                        } title="Multi-output Incremental Backpropagation (Submitted)" subheader="Aug 2020 - Feb 2021"/>
                        <CardContent>
                        Designed and tested deep learning models with the proposed architecture model and achieved a 10% reduction in time
compared to a standard neural network. <br/>Eliminated trial and error method of obtaining the optimal number of layers by incrementally adding layers from the start and
achieved a 2 percent higher accuracy than the standard model
                        </CardContent>
                </Card>
            </Grid>
            
            <Grid item xs={4}>
                <Card sx={{ maxWidth: 500,  minHeight:550 }}>
                    <CardMedia component="img"
                        height="194"
                        image={onlineprintshop}
                        alt="Online printing shop"/>
                    <CardHeader action={
                        <IconButton color="secondary" onClick={()=>openInNewTab("https://github.com/rachanac16/OnlinePrintShop")}><GitHubIcon sx={{ fontSize: "30px" }}/></IconButton>
                        } title="Online Printing Shop" subheader="Jan 2019 - Jan 2020"/>
                        <CardContent>
                        Built an online platform to place orders for printing documents that also efficiently calculates the ETA of the documents and
handles alerts admins about low resources.<br/> Used MySQL for database, ReactJS for frontend, Spring boot for backend with factory and singleton design patterns to reduce
startup time and make the application memory efficient by exploiting Spring boot’s bean configurations
                        </CardContent>
                </Card>
            </Grid>
            
        </Grid>
    </div>;
}

export default Projects;