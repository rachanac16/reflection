import {React} from 'react';
import rachana from './../assets/rachana.png';
import { Grid, Avatar } from '@mui/material';


export default function MyAvatar(){
 return <div>
    <Grid container direction={'column'} alignItems='center' justifyContent={'center'}>
        <Grid item xs={4} style={{padding:'20px'}}>
            <Avatar alt="Rachana C" src={rachana} sx={{ width: 400, height: 400 }}/>
        </Grid>
    </Grid>
 </div>
}