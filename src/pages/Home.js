import { Grid, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typewriter from 'typewriter-effect';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Home(){
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    return <div>
        <Grid container direction={'column'} alignItems='center' justifyContent={'center'}>
            <Grid item justifyContent='center' xs={4}>
                <Typography variant='h4' align='center'>
                    <div className='name'>

                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hi! I am...").start();
                        }} 
                    />
                    </div>
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant='h1' align='center'> 
                    <div className='name'>
                        Rachana C
                    </div>
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant='h6' align='center'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("I appreciate your visit. I hope I look good. ;P").start();
                        }}
                    />
                </Typography>
            </Grid>
            <Grid item paddingTop={'20px'}>
                <IconButton color="primary" onClick={()=>openInNewTab("https://www.linkedin.com/in/rachana-chaudhari/")}><LinkedInIcon sx={{ fontSize: "30px" }}/></IconButton>
                <IconButton color="primary" onClick={()=>openInNewTab("https://github.com/rachanac16")}><GitHubIcon sx={{ fontSize: "30px" }}/></IconButton>
                <IconButton color="primary" onClick={()=>openInNewTab("mailto:rc774@cornell.edu")}><EmailIcon sx={{ fontSize: "30px" }}/></IconButton>
            </Grid>
        </Grid>
        
    </div>;
}

export default Home;