import { Avatar, Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import cornell from './../assets/cornell.png';
import vjti from './../assets/vjti.png';
import Typewriter from 'typewriter-effect';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function createData(universityIndex, shortUniversityName, universityName, date, degree, relevantCoursework, icon) {
    return { universityIndex, shortUniversityName, universityName, date, degree, relevantCoursework, icon};
}
const rows = [
    createData(1, 'cornell', 'Cornell University, Ithaca, NY', 'August 2022 - May 2023', 'Master of Engineering in Computer Science', ['Introduction to Algorithm Analysis', 'Intelligent System (Artificial Intelligence)', 'Business Intelligence Systems'], cornell),
    createData(2, 'vjti', 'Veermata Jijabai Technological University, Mumbai, India', 'August 2017 - May 2021', 'Bachelor of Technology in Information Technology', ['Design & Analysis of Algorithms', 'Human Computer Interactions', 'Cloud Computing','Software Analysis and Design Patterns', 'Multicore Technologies', 'Operating Systems'], vjti)
];

function Education(){

    const [universityIndex, setUniversityIndex] = useState(0);
    const [learnMore, setLearnMore] = useState(false)


    const onLearnMoreClick = (index) => {
        setLearnMore(true);
        setUniversityIndex(index-1);
    }

    const onGoBackClick = () => {
        setLearnMore(false);
    }

    return <div className='home_container'>
        <div className={(learnMore)?'container_left':'container_full'}>
            <div className='education_table'>
            <Table sx={{ maxWidth: '100%'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'white', width:'60%'}}>
                            <Typography variant='h3'>
                                <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString("Education").start();
                                }} 
                                />
                            </Typography>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.universityIndex}
                    >
                        <TableCell component="th" scope="row" style={{color:'white'}}>
                            <Typography variant='h5'>
                                {row.universityName}
                            </Typography>
                            <Typography variant='h6'>
                                {row.degree}
                            </Typography>
                            <Typography variant='h6'>
                                {row.date}
                            </Typography>
                            <Button  variant="outlined" onClick={()=>onLearnMoreClick(row.universityIndex)}>Learn More</Button>
                        </TableCell>
                    
                    </TableRow>))
                }
                </TableBody>
            </Table>
        </div>
        </div>
        {learnMore?<div className='container_right'>
            <div className='university_details slide_from_left'>
                <div>
                    <IconButton color="primary" onClick={()=>onGoBackClick()}>
                        <ArrowBackIcon style={{fontSize:"50px"}}/>
                    </IconButton>
                </div>
                <div>
                    <Avatar src={(rows[universityIndex].shortUniversityName)==="cornell"?cornell:vjti} sx={{height:'100px', width:'100px'}}/>
                </div>
                <div className='relevant_coursework'>
                    <Typography variant='h6'>
                        <ul>
                        {rows[universityIndex].relevantCoursework.map((course_name)=>(
                            <li>{course_name}</li>
                        ))}
                        </ul>
                    </Typography>
                </div>
            </div>
        </div>:<div></div>}
    </div>;
}

export default Education;