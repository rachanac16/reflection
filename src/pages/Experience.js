import { Avatar, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
import JPMorgan from './../assets/jpmc.png';
import Deesha from './../assets/deesha.png';
import OTB from './../assets/otb.png';
import Typewriter from 'typewriter-effect';

function createData(id, companyName, position, location, date, description, icon) {
    return { id, companyName, position, location, date, description, icon};
}
const rows = [
    createData(1, 'JPMorgan Chase & Co.', 'Software Analyst', 'Mumbai, India','July 2021 - July 2022', 
    ['Responsible for providing automation using Python to existing monitoring applications in a DevOps and SRE role and taking responsibility for ad hoc requests for enhancements in internal applications'
    ,
     'Created an incident reporting system in Java, and AngularJS used across all business markets by more than 200+ people'], JPMorgan),
    createData(2, 'Deesha Trade Endeavors Pvt. Ltd.', 'Backend Developer Intern', 'Mumbai, India','March 2021 - April 2022', 
    ['Developed the application, tested, and maintained 10+ endpoints using Spring boot for an auction system of tea products'
    ,
    'Improved the database to store the client information and the auction details for fast and real-time querying'], Deesha),
    createData(3, 'JPMorgan Chase & Co.', 'Software Analyst Intern', 'Mumbai, India','June 2020 - July 2021', 
    ['Developed a Web Application using Spring-boot, ReactJS, and MySQL for handling daily activities of an NGO and providing a seamless volunteer experience with dynamic schedules that used a heuristic approach for organizing events'], JPMorgan),
    createData(4, 'OTB Innovtech LLP.', 'Android Application Developer Intern', 'Mumbai, India','May 2019 - July 2019', 
    ['Designed an Android Application to track 100+ salespersons in real-time on the field with integrated features like booking orders and updating inventory which led to saving 2 hours per salesperson in traveling and eliminated 10 hours of delay caused by decisions made manually'
    ,
    'Used Android Studio in Java; XML, PHP for REST API; AsyncTask for background threads; Firebase for real-time notifications'], OTB), 
];

function Experience(){
    return <div className='tablecontainer' style={{display:'flex', alignItems:'center', justifyContent:'center', flexFlow:'wrap', maxHeight:'100%'}}>
        <Table sx={{ maxWidth: '90%', overFlow:'auto'}} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell></TableCell>
                    <TableCell style={{color:'white', width:'70%', paddingLeft:'50px'}}>
                        <Typography variant='h3' ali>
                            <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString("Experience").start();
                            }} 
                            />
                        </Typography>
                    </TableCell>
                    <TableCell align="center" style={{color:'white', width:'20%'}}><Typography variant='h4'></Typography></TableCell>
                </TableRow>
            </TableHead>
            
            {rows.map((row) => (
                <TableBody>
                <TableRow
                key={row.id}
                >
                    <TableCell component="th" scope="row" style={{color:'white'}}><Avatar src={row.icon} sx={{height:'60%', width:'60%'}}/></TableCell>
                    <TableCell component="th" scope="row" style={{color:'white'}}>
                        <Typography variant='h6'>
                            {row.companyName} | {row.position} | {row.location}
                        </Typography>
                        <Typography  variant='body'>
                            <ul>
                            {row.description.map((d)=>(
                                <li>
                                    {d}
                                </li>
                            ))}
                            </ul>
                        </Typography>
                        {/* <Typography variant='h6'>
                        {row.position} | {row.location}
                        </Typography> */}
                        
                    </TableCell>
                    <TableCell component="th" align="center" scope="row" style={{color:'white'}}><Typography variant='h6'>
                            {row.date}
                    </Typography></TableCell>
                    
                </TableRow>
                {/* <TableRow>
                    <TableCell colSpan={2} component="th" align="left" scope="row" style={{color:'white'}}>
                    <Typography  variant='body'>
                            <ul>
                            {row.description.map((d)=>(
                                <li>
                                    {d}
                                </li>
                            ))}
                            </ul>
                        </Typography>
                    </TableCell>
                </TableRow> */}
                {/* <TableRow>
                    <TableCell component="th" align="left" scope="row" style={{color:'white'}} colSpan={3}>
                        <Typography  variant='body'>
                            <ul>
                            {row.description.map((d)=>(
                                <li>
                                    {d}
                                </li>
                            ))}
                            </ul>
                        </Typography>
                    </TableCell>
                </TableRow> */}
                </TableBody>
                ))
            }
            
        </Table>
    </div>;
}

export default Experience;