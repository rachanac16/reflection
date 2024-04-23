import { Grid, IconButton, Button } from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Navbar from "../components/Navbar";
import ExperienceData from "../components/ExperienceData";
import ExperienceRecord from "../components/ExperienceRecord";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

function Experience(props) {
  const [currentRecord, setCurrentRecord] = useState(0);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);
  const [experienceData, setExperienceData] = useState(ExperienceData);
  const progressFactor = 100 / ExperienceData.length;

  const increaseCurrentRecord = () => {
    if (currentRecord < experienceData.length - 2) {
      setShowArrowRight(true);
      setShowArrowLeft(true);
    } else {
      setShowArrowRight(false);
    }
    const progress = document.querySelector("#progress");
    progress.style.width = progressFactor * (currentRecord + 2) + "%";
    setCurrentRecord(currentRecord + 1);
  };

  const decreaseCurrentRecord = () => {
    if (currentRecord === experienceData.length - 1) {
      setShowArrowRight(true);
    } else if (currentRecord > 1) {
      setShowArrowLeft(true);
    } else {
      setShowArrowLeft(false);
    }
    setCurrentRecord(currentRecord - 1);
    const progress = document.querySelector("#progress");
    progress.style.width = progressFactor * currentRecord + "%";
  };

  const resetCurrentRecord = () => {
    setCurrentRecord(0);
    setShowArrowLeft(false);
    setShowArrowRight(true);
    const progress = document.querySelector("#progress");
    progress.style.width = progressFactor + "%";
  };

  return (
    <Grid container className="App-container bg-secondary" id="experience">
      <Grid item container xs={12} md={6} lg={6} className="bg-white" p={5}>
        <Navbar scrollTo={props.scrollTo} id={"experiencelink"} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="header color-primary center-flex bg-secondary"
        p={5}
      >
        Experience
      </Grid>
      <Grid item xs={12} md={12} lg={12} className="bg-white" spacing={0}>
        <div className="progress" id="progress"></div>
      </Grid>
      <Grid item container xs={12} md={12} lg={12} className="bg-white">
        <Grid
          item
          container
          xs={12}
          md={12}
          lg={12}
          className="content center-flex letter-spacing"
          p={2}
        >
          <Grid
            item
            container
            xs={12}
            md={5}
            lg={5}
            className="content-big center-flex"
            spacing={1}
          >
            {showArrowLeft && (
              <Grid
                item
                xs={2}
                md={2}
                lg={2}
                className="content-big center-flex"
              >
                <IconButton onClick={() => increaseCurrentRecord()} sx={{ backgroundColor: "var(--primary)" }}>
                  <ChevronLeftIcon
                    color="secondary"
                    className="icon-button"
                  />
                </IconButton>
              </Grid>
            )}
            <Grid
              item
              xs={8}
              md={8}
              lg={showArrowLeft ? 8 : 10}
              className="center-flex color-primary"
            >
              {experienceData[currentRecord].date}
            </Grid>
            <Grid item xs={2} md={2} lg={2} className="center-flex">
              {showArrowRight ? (
                <IconButton onClick={() => increaseCurrentRecord()} sx={{ backgroundColor: "var(--primary)" }}>
                  <ChevronRightIcon
                    color="secondary"
                    className="icon-button"
                  />
                </IconButton>
              ) : (
                <IconButton onClick={() => resetCurrentRecord()} sx={{ backgroundColor: "var(--primary)" }}>
                  <RestartAltIcon
                    color="secondary"
                    className="icon-button"
                  />
                </IconButton>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <ExperienceRecord record={experienceData[currentRecord]} />

      {/* <Grid
        item
        container
        xs={12}
        md={12}
        lg={12}
        className="center-flex bg-primary"
      >
        <IconButton onClick={() => props.scrollTo("#projects")}>
          <KeyboardDoubleArrowDownIcon
            color="secondary"
            sx={{ fontSize: "30px", "&:hover": { color: "#000000" } }}
          />
        </IconButton>
      </Grid> */}
    </Grid>
  );
}

export default Experience;
