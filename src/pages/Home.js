import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typewriter from 'typewriter-effect';

function Home(){
    return <div>
        <Grid container direction={'column'} alignItems='center' justifyContent={'center'}>
            <Grid item justifyContent='center' xs={4}>
                <Typography variant='h4' align='center'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hi. I am...").start();
                        }} 
                    />
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant='h1' align='center'> 
                    <div className='name'>
                        Rachana C
                    </div>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='h6' align='center' xs={4}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Also this website is under development. Wait for it. Or not.").start();
                        }}
                    />
                </Typography>
            </Grid>
        </Grid>
        
    </div>;
}

export default Home;