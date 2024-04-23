import { Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Navbar from "../components/Navbar";
import EducationData from "../components/EducationData";
import EducationRecord from "../components/EducationRecord";

function Education(props) {
  const [universityIndex, setUniversityIndex] = useState(0);
  const [learnMore, setLearnMore] = useState(false);

  const onLearnMoreClick = (index) => {
    setLearnMore(true);
    setUniversityIndex(index - 1);
  };

  const onGoBackClick = () => {
    setLearnMore(false);
  };

  return (
    <Grid container className="App-container" id="education" onWheel={()=>{props.scrollTo("#experience", "instant")}}>
      <Grid item container xs={12} md={6} lg={6} className="bg-secondary" p={5}>
        <Navbar scrollTo={props.scrollTo} id="educationlink" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="header color-primary center-flex bg-secondary"
        p={5}
      >
        Education
      </Grid>
      {EducationData.map((educationRecord) => (
        <EducationRecord
          record={educationRecord}
          key={educationRecord.universityIndex}
        />
      ))}
      {/* <Grid
        item
        container
        xs={12}
        md={12}
        lg={12}
        className="center-flex"
        p={2}
      >
        <IconButton onClick={() => props.scrollTo("#experience")}>
          <KeyboardDoubleArrowDownIcon
            color="buttonColor"
            sx={{ fontSize: "30px", "&:hover": { color: "#ffffff" } }}
          />
        </IconButton>
      </Grid> */}
      {/* <div className="next-arrow-icon-education">
        <IconButton onClick={() => props.scrollTo("#experience")}>
          <KeyboardDoubleArrowDownIcon
            color="primary"
            sx={{ fontSize: "40px", "&:hover": { color: "black" } }}
          />
        </IconButton>
      </div> */}
    </Grid>
  );
}

export default Education;
