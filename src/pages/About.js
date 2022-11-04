import { Box, Typography } from '@mui/material';
import { getInitColorSchemeScript } from '@mui/system';
import React from 'react';
import Typewriter from 'typewriter-effect';

function About(){
    return <div>
        <Typography variant='h3' paddingLeft='100px'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString("About").start();
                }} 
                />
            </Typography>
        <Typography variant='h5' padding='100px'>
            Determined and dedicated software developer to achieve success in creating, debugging, testing 
            and deploying systems powered with AI to enhance life experiences in different aspects from 
            important day-to-day chores to pursuing a hobby. Cherishes a fast-paced innovative environment 
            with excellent interpersonal as well as communication skills.
        </Typography>
    </div>;
}

export default About;