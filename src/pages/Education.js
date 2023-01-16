import { Grid, IconButton } from '@mui/material';
import React, { useState } from 'react';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import Navbar from '../components/Navbar';
import EducationData from '../components/EducationData';
import EducationRecord from '../components/EducationRecord';

function Education(props){

    const [universityIndex, setUniversityIndex] = useState(0);
    const [learnMore, setLearnMore] = useState(false)

    const onLearnMoreClick = (index) => {
        setLearnMore(true);
        setUniversityIndex(index-1);
    }

    const onGoBackClick = () => {
        setLearnMore(false);
    }

    return <Grid container direction="column" className='App-container' id="education">
                <Grid item container xs={2} md={2} lg={2}>
                    <Grid item container xs={12} md={6} lg={6} className="bg-white">
                        <Navbar scrollTo={props.scrollTo}/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6} className="main-header center-flex">
                            EDUCATION
                    </Grid>
                </Grid>
                <Grid item container xs={9} md={9} lg={9} className="bg-white" spacing={2}>
                    {
                        EducationData.map((educationRecord, universityIndex)=>(<EducationRecord record={educationRecord}/>))
                    }
                </Grid>
                <Grid item container xs={1} md={1} lg={1} className="center-flex width100">
                    <IconButton onClick={()=>props.scrollTo("#experience")}><KeyboardDoubleArrowDownIcon color="buttonColor" sx={{ fontSize: "30px", "&:hover": { color: "#ffffff" }}}/></IconButton>
                </Grid>
            </Grid>;
}

export default Education;