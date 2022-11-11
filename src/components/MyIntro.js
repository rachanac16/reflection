import {React} from 'react';
import { Grid, IconButton, Typography, Avatar } from '@mui/material';
import Typewriter from 'typewriter-effect';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function MyIntro({shouldAnimate}){

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return <div>
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
                        
                            
                        {
                            (shouldAnimate)?
                            <div className='name'>
                            <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Software Engineer :)").start();
                            }}
                            
                        />
                           </div> :
                            <div className='name'>
                            Software Engineer :)
                           </div> 
                        }
                        
                    </Typography>
                </Grid>
                <Grid item paddingTop={'20px'}>
                    <IconButton color="primary" onClick={()=>openInNewTab("https://www.linkedin.com/in/rachana-chaudhari/")}><LinkedInIcon sx={{ fontSize: "30px" }}/></IconButton>
                    <IconButton color="primary" onClick={()=>openInNewTab("https://github.com/rachanac16")}><GitHubIcon sx={{ fontSize: "30px" }}/></IconButton>
                    <IconButton color="primary" onClick={()=>openInNewTab("mailto:rc774@cornell.edu")}><EmailIcon sx={{ fontSize: "30px" }}/></IconButton>
                </Grid>
            </Grid>
    </div>
}