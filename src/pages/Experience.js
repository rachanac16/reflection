import { Avatar, Table, TableBody, TableCell, TableHead, TableRow, Typography, Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import JPMorgan from './../assets/jpmc.png';
import Deesha from './../assets/deesha.png';
import OTB from './../assets/otb.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typewriter from 'typewriter-effect';

function createData(id, shortName, companyName, position, location, date, description, icon, skills) {
    return { id, shortName, companyName, position, location, date, description, icon, skills};
}
const rows = [
    createData(1, 'jpmc', 'JPMorgan Chase & Co.', 'Software Analyst', 'Mumbai, India','July 2021 - July 2022', 
    ['Responsible for providing automation using Python to existing monitoring applications in a DevOps and SRE role and taking responsibility for ad hoc requests for enhancements in internal applications'
    ,
     'Created an incident reporting system in Java, and AngularJS used across all business markets by more than 200+ people'], {"jpmc": JPMorgan}, "Python | Python Server Side | Java | Javascript | HTML | System Designs | Agile Methodologies | Scrum | CI\CD | Jules deployment"),
    createData(2, 'deesha', 'Deesha Trade Endeavors Pvt. Ltd.', 'Backend Developer Intern', 'Mumbai, India','March 2021 - April 2022', 
    ['Developed the application, tested, and maintained 10+ endpoints using Spring boot for an auction system of tea products'
    ,
    'Improved the database to store the client information and the auction details for fast and real-time querying'], {"deesha": Deesha}, "Spring Boot | Java | Design Patterns | REST API | React.js"),
    createData(3, 'jpmc', 'JPMorgan Chase & Co.', 'Software Analyst Intern', 'Mumbai, India','June 2020 - July 2021', 
    ['Developed a Web Application using Spring-boot, ReactJS, and MySQL for handling daily activities of an NGO and providing a seamless volunteer experience with dynamic schedules that used a heuristic approach for organizing events'], {"jpmc": JPMorgan}, "Spring Boot | Java | React.js | HTML | Javascript"),
    createData(4, 'otb', 'OTB Innovtech LLP.', 'Android Application Developer Intern', 'Mumbai, India','May 2019 - July 2019', 
    ['Designed an Android Application to track 100+ salespersons in real-time on the field with integrated features like booking orders and updating inventory which led to saving 2 hours per salesperson in traveling and eliminated 10 hours of delay caused by decisions made manually'
    ,
    'Used Android Studio in Java; XML, PHP for REST API; AsyncTask for background threads; Firebase for real-time notifications'], {"otb": OTB}, "Android Studio | Java | Firebase | Javascript | REST API"), 
];

function Experience(){

    const [experienceIndex, setExperienceIndex] = useState(0);
    const [learnMore, setLearnMore] = useState(false)


    const onLearnMoreClick = (index) => {
        setLearnMore(true);
        setExperienceIndex(index-1);
        console.log(rows[experienceIndex].icon);
    }

    const onGoBackClick = () => {
        setLearnMore(false);
    }

    return <div style={{height:"100%", width:"100%", justifyContent:"center", alignItems:"center", display:"flex"}} id="experience">
        {learnMore?<div className='home_container'>
            <div className='container_left university_details_left'>
                <div style={{justifyContent:"space-around", display:"flex", alignItems:"center", width:"100%", paddingBottom:"10px"}}>
                    <div style={{position:"absolute", left:"25px"}}>
                        <IconButton color="primary" onClick={()=>onGoBackClick()}>
                            <ArrowBackIcon style={{fontSize:"50px"}}/>
                        </IconButton>
                    </div>
                    <div style={{width:"100%", justifyContent:"center", alignItems:"center", display:"flex"}}>
                        <Avatar src={rows[experienceIndex].icon[rows[experienceIndex].shortName]} sx={{height:'100px', width:'100px'}}/>
                    </div>
                </div>
                {/* <div style={{height:"80px"}}></div> */}
                <div>
                    {/* <Avatar src={(rows[experienceIndex].shortUniversityName)==="cornell"?cornell:vjti} sx={{height:'100px', width:'100px'}}/> */}
                </div>
                <div>
                    <Typography variant='h3' align='center'>
                        {rows[experienceIndex].position}
                    </Typography>
                    <Typography variant='h4' align='center'>
                        {rows[experienceIndex].companyName} {rows[experienceIndex].location} 
                    </Typography>
                    <Typography variant='h5' align='center'>
                        {rows[experienceIndex].date}
                    </Typography>
                </div>
            </div>
            <div className='container_right right_dim'>
                <div className="flip-card">
                    <div className='university_details_right'>   
                        <div className='flip-card-front slide_from_left'>
                            <Typography variant='h3'>
                                Highlight
                            </Typography>
                            <Typography variant='h6' align='left'>
                                    <ul>
                                    {rows[experienceIndex].description.map((desc)=>(
                                        <li>{desc}</li>
                                    ))}
                                    </ul>
                            </Typography>
                        </div>
                        <div className='flip-card-back'>
                            <Typography variant='h3' padding="10px">
                                Skills 
                            </Typography>
                            <Typography variant='h6'>
                                {rows[experienceIndex].skills}
                            </Typography>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
        :
        <div className='tablecontainer' style={{display:'flex', alignItems:'center', justifyContent:'center', width:"80%"}}>
        <Table sx={{ maxWidth: '100%', overFlow:'auto'}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell style={{color:'white', paddingLeft:'50px'}} colSpan={"3"}>
                        <Typography variant='h3' ali>
                            <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Experience").start();
                            }} 
                            />
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            
            {rows.map((row) => (
                <TableBody>
                <TableRow
                key={row.id}
                >
                    <TableCell component="th" scope="row" style={{color:'white'}}><Avatar src={row.icon[row.shortName]} sx={{height:'100px', width:'100px'}}/></TableCell>
                    <TableCell component="th" scope="row" style={{color:'white'}}>
                        <Typography variant='h5'>
                            {row.companyName}
                        </Typography>
                        <Typography variant='h6' paddingBottom={"10px"}>
                            {row.position} | {row.location}
                        </Typography>
                        <Button variant="outlined" onClick={()=>onLearnMoreClick(row.id)} sx={{
                            ':hover': {
                            bgcolor: 'secondary.main', // theme.palette.primary.main
                            color: 'white',
                            },
                        }}>Learn More</Button>
                    </TableCell>
                    <TableCell component="th" align="center" scope="row" style={{color:'white'}}><Typography variant='h6'>
                            {row.date}
                    </Typography></TableCell>
                    
                </TableRow>
                </TableBody>
                ))
            }
            
        </Table>
    </div>
        }
    </div>;
}

export default Experience;