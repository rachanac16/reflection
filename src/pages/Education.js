import { Avatar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import cornell from './../assets/cornell.png';
import vjti from './../assets/vjti.png';
import Typewriter from 'typewriter-effect';

function createData(universityName, date, degree, relevantCoursework, icon) {
    return { universityName, date, degree, relevantCoursework, icon};
}
const rows = [
    createData('Cornell University, Ithaca, NY', 'August 2022 - May 2023', 'Master of Engineering in Computer Science', 'Introduction to Algorithm Analysis | Intelligent System (Artificial Intelligence) | Business Intelligence Systems', cornell),
    createData('Veermata Jijabai Technological University, Mumbai, India', 'August 2017 - May 2021', 'Bachelor of Technology in Information Technology', 'Design & Analysis of Algorithms | Human Computer Interactions | CloudComputing | Software Analysis and Design Patterns | Multicore Technologies | Operating Systems', vjti)
];

function Education(){
    return <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Table sx={{ maxWidth: '80%'}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell style={{color:'white', width:'60%'}}>
                        <Typography variant='h3'>
                            <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Education").start();
                            }} 
                            />
                        </Typography>
                    </TableCell>
                    <TableCell align="center" style={{color:'white'}}>
                        <Typography variant='h4'>
                            
                            </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                key={row.universityName}
                >
                    <TableCell component="th" scope="row" style={{color:'white'}}><Avatar src={row.icon} sx={{height:'50%', width:'50%'}}/></TableCell>
                    <TableCell component="th" scope="row" style={{color:'white'}}>
                        <Typography variant='h5'>
                            {row.universityName}
                        </Typography>
                        <Typography variant='h6'>
                            {row.degree}
                        </Typography>
                        <Typography  variant='body'>
                            {row.relevantCoursework}
                        </Typography>
                    </TableCell>
                    <TableCell component="th" align="center" scope="row" style={{color:'white'}}><Typography variant='h6'>
                            {row.date}
                        </Typography></TableCell>
                </TableRow>))
            }
            </TableBody>
        </Table>
    </div>;
}

export default Education;