import { Box, Typography } from '@mui/material';
import React from 'react';
import Typewriter from 'typewriter-effect';
import MyIntro from '../components/MyIntro';

function About(){
    return <div className='home_container' id="about">
        <div className='container_left slide_from_right'>
            <MyIntro shouldAnimate={false}/>
        </div>
        <div className='container_right about_container slide_from_left'>
            <Typography variant='h3' align="center" paddingBottom={"10px"}>
                About
            </Typography>
            <Typography variant='h5' align="justify">
                Determined and dedicated Software Engineer to achieve success in creating, debugging, testing 
                and deploying systems powered with AI to enhance life experiences in different aspects ranging from 
                important day-to-day chores to pursuing a hobby. Cherishes a fast-paced innovative environment 
                with excellent interpersonal as well as communication skills.
            </Typography>
        </div>
    </div>;
}

export default About;