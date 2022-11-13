import { Avatar, Button, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import cornell from './../assets/cornell.png';
import vjti from './../assets/vjti.png';
import Typewriter from 'typewriter-effect';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function createData(universityIndex, shortUniversityName, universityName, date, degree, relevantCoursework, icon, desc) {
    return { universityIndex, shortUniversityName, universityName, date, degree, relevantCoursework, icon, desc};
}
const rows = [
    createData(1, 'cornell', 'Cornell University, Ithaca, NY', 'August 2022 - May 2023', 'Master of Engineering in Computer Science', 
    ['Introduction to Algorithm Analysis', 'Foundations of Artificial Intelligence', 'Business Intelligence Systems', 'Management Consulting Essentials'], 
    cornell,
    'Working in the industry for a year, I understood my strengths and weaknesses. I decided that going back to academia is the best way to polish my skills. This M.Engg degree is an industry-focused professional degree that helps me grow in specialized areas that I wanted to focus on.'),
    createData(2, 'vjti', 'Veermata Jijabai Technological University, Mumbai, India', 'August 2017 - May 2021', 'Bachelor of Technology in Information Technology (GPA 9.51/10)', 
    ['Design & Analysis of Algorithms', 'Human Computer Interactions', 'Cloud Computing','Software Analysis and Design Patterns', 'Multicore Technologies', 'Operating Systems'], 
    vjti,
    'I graduated as the valedictorian of the class of 2021. My decision to pursue B.Tech in IT (CS) came from my interests in all things computers. I loved programming in high school and started preparing for a career in the same. My passion for system and software developer was engendered by the courses I took in this college.')
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

    return <div style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center", display:"flex"}}>
        {learnMore?
        <div className='home_container'>
            <div className='container_left university_details_left'>
                <div style={{justifyContent:"space-around", display:"flex", alignItems:"center", width:"100%", paddingBottom:"10px"}}>
                    <div style={{position:"absolute", left:"25px"}}>
                        <IconButton color="primary" onClick={()=>onGoBackClick()}>
                            <ArrowBackIcon style={{fontSize:"50px"}}/>
                        </IconButton>
                    </div>
                    <div style={{width:"100%", justifyContent:"center", alignItems:"center", display:"flex"}}>
                        <Avatar src={(rows[universityIndex].shortUniversityName)==="cornell"?cornell:vjti} sx={{height:'100px', width:'100px'}}/>
                    </div>
                </div>
                {/* <div style={{height:"80px"}}></div> */}
                <div>
                    {/* <Avatar src={(rows[universityIndex].shortUniversityName)==="cornell"?cornell:vjti} sx={{height:'100px', width:'100px'}}/> */}
                </div>
                <div>
                    <Typography variant='h3' align='center'>
                        {rows[universityIndex].universityName}
                    </Typography>
                    <Typography variant='h4' align='center'>
                        {rows[universityIndex].degree}
                    </Typography>
                    <Typography variant='h6' align='center'>
                        {rows[universityIndex].date}
                    </Typography>
                </div>
            </div>
            <div className='container_right right_dim'>
                <div className="flip-card">
                    <div className='university_details_right'>   
                        <div className='flip-card-front'>
                            <Typography variant='h3'>
                                Coursework
                            </Typography>
                            <Typography variant='h6' align='left'>
                                    <ul>
                                    {rows[universityIndex].relevantCoursework.map((course_name)=>(
                                        <li>{course_name}</li>
                                    ))}
                                    </ul>
                            </Typography>
                        </div>
                        <div className='flip-card-back'>
                            <Typography variant='h3' padding="10px">
                                Motivation
                            </Typography>
                            <Typography variant='h6'>
                                {rows[universityIndex].desc}
                            </Typography>
                        </div>   
                    </div>
                </div>
            </div>
        </div>:
        <div className='container_full'>
            <div className='education_table'>
            <Table sx={{ maxWidth: '100%'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:'white', width:'60%'}} colSpan={"2"}>
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
                    >   <TableCell>
                        <Avatar src={row.icon} sx={{height:'100px', width:'100px'}}/>
                    </TableCell>
                        <TableCell component="th" scope="row" style={{color:'white'}}>
                            <Typography variant='h5'>
                                {row.universityName}
                            </Typography>
                            <Typography variant='h6'>
                                {row.degree}
                            </Typography>
                            <Typography variant='h6' paddingBottom={"10px"}>
                                {row.date}
                            </Typography>
                            <Button variant="outlined" onClick={()=>onLearnMoreClick(row.universityIndex)}>Learn More</Button>
                        </TableCell>
                    
                    </TableRow>))
                }
                </TableBody>
            </Table>
            </div>
        </div>}
    </div>;
}

export default Education;