import React, {useState} from 'react';
import RobotoSlabBlack from './fonts/Roboto_Slab/static/RobotoSlabBlack.ttf';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lora'
    ].join(','),
  },
});

function App() {
  
  return <ThemeProvider theme={theme}>
    <div className='main_container'>
      <div className='name_container'>
        <div className='name'>
          <Typography variant="h2" align='center'>
            Rachana C.
          </Typography>
        </div>
      </div>
      <div className='card_container'>
      
        <div className='card_item'>
          <div className='card'>
            Hello 1
          </div>
        </div>
        <div className='card_item'>
          <div className='card'>
            Hello 2
          </div>
        </div>
        <div className='card_item'>
          <div className='card'>
            Hello 3
          </div>
        </div>
      </div>
    </div>
  </ThemeProvider>
}
export default App;
