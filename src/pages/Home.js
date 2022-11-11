import { Grid, IconButton, Typography, Avatar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import rachana from './../assets/rachana.png';

function Home(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return <div className='home_container'>
        <div className='container_left'>
            <Grid container direction={'column'} alignItems='center' justifyContent={'center'}>
                <Grid item xs={4} style={{padding:'20px'}}>
                    <Avatar alt="Rachana C" src={rachana} sx={{ width: 400, height: 400 }}/>
                </Grid>
            </Grid>
        </div>
        <div className='container_right'>
            <Grid container direction={'column'} alignItems='center' justifyContent={'center'}>
                <Grid item xs={4}>
                    <Typography variant='h1' align='center'> 
                        <div >
                            Rachana Chaudhari
                        </div>
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    
                    <Typography variant='h3' align='center'>
                        <div className='name'>
                            
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Software Engineer :)").start();
                            }}
                        />
                        </div>
                    </Typography>
                </Grid>
                <Grid item paddingTop={'20px'}>
                    <IconButton color="primary" onClick={()=>openInNewTab("https://www.linkedin.com/in/rachana-chaudhari/")}><LinkedInIcon sx={{ fontSize: "30px" }}/></IconButton>
                    <IconButton color="primary" onClick={()=>openInNewTab("https://github.com/rachanac16")}><GitHubIcon sx={{ fontSize: "30px" }}/></IconButton>
                    <IconButton color="primary" onClick={()=>openInNewTab("mailto:rc774@cornell.edu")}><EmailIcon sx={{ fontSize: "30px" }}/></IconButton>
                </Grid>
            </Grid>
        </div>    
    </div>;
}

export default Home;