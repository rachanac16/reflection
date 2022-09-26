import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typewriter from 'typewriter-effect';

function Home(){
    return <div>
        <Grid container direction={'column'} alignItems='center' justifyContent={'center'} style={{marginTop:200}}>
            <Grid item justifyContent='center'>
                <Typography variant='h6' align='center'>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter.typeString("Hi. I am...").start();
                        }}
                    />
                </Typography>
            </Grid>
            <Grid item>
                <Grid container direction={'row'} alignItems='stretch' justifyItems='center' height={'inherit'}>
                    <Grid item>
                        <Typography variant='h1' align='center'> 
                            Rachana C
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Typography variant='h6' align='center'>
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