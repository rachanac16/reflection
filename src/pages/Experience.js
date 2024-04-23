import { Grid, IconButton, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Navbar from "../components/Navbar";
import ExperienceData from "../components/ExperienceData";
import ExperienceRecord from "../components/ExperienceRecord";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import Slide from "@mui/material/Slide";

function Experience(props) {
  const [currentRecord, setCurrentRecord] = useState(0);
  const [showArrowLeft, setShowArrowLeft] = useState(false);
  const [showArrowRight, setShowArrowRight] = useState(true);
  const [experienceData, setExperienceData] = useState(ExperienceData);
  const [progressFactor, setProgressFactor] = useState(
    100 / ExperienceData.length,
  );

  const setProgress = (width) => {
    const progress = document.querySelector("#progress");
    const progressRemaining = document.querySelector("#progress-remaining");
    progressRemaining.style.width = width + "%";
    progress.style.width = 99 - width + "%";
    return width;
  };

  const increaseCurrentRecord = () => {
    const curr = currentRecord + 1;
    if (curr > experienceData.length - 1) {
      return;
    }
    if (curr === experienceData.length - 1) {
      setShowArrowRight(false);
      setShowArrowLeft(true);
    } else if (curr > 0) {
      setShowArrowRight(true);
      setShowArrowLeft(true);
    } else {
      setShowArrowLeft(false);
    }
    setProgress(progressFactor * curr);
    setCurrentRecord(curr);
  };

  const decreaseCurrentRecord = () => {
    const curr = currentRecord - 1;
    if (curr < 0) {
      return;
    }
    if (curr > 0) {
      setShowArrowLeft(true);
      setShowArrowRight(true);
    } else {
      setShowArrowLeft(false);
    }
    setProgress(progressFactor * curr);
    setCurrentRecord(curr);
  };

  const resetCurrentRecord = () => {
    setCurrentRecord(0);
    setShowArrowLeft(false);
    setShowArrowRight(true);
    setProgress(0);
  };

  return (
    <Grid
      container
      className="App-container bg-secondary"
      id="experience"
      onWheel={() => {
        props.scrollTo("#projects", "instant");
      }}
    >
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
      <Grid
        item
        container
        xs={12}
        md={12}
        lg={12}
        sx={{ paddingLeft: "7rem", paddingRight: "7rem", display: "flex" }}
      >
        <div className="progress-remaining" id="progress-remaining"></div>
        <div className="progress" id="progress"></div>
      </Grid>
      <Grid item container xs={12} md={12} lg={12}>
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
                className="content-big center-flex icon-button"
              >
                <IconButton
                  onClick={() => decreaseCurrentRecord()}
                  sx={{ backgroundColor: "var(--primary)" }}
                >
                  <ChevronLeftIcon
                    color="secondary"
                    className="icon-button"
                    sx={{ fontSize: "30px" }}
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
            {showArrowRight ? (
              <Grid
                item
                xs={2}
                md={2}
                lg={2}
                className="center-flex icon-button"
              >
                <IconButton
                  onClick={() => increaseCurrentRecord()}
                  sx={{ backgroundColor: "var(--primary)" }}
                >
                  <ChevronRightIcon
                    color="secondary"
                    className="icon-button"
                    sx={{ fontSize: "30px" }}
                  />
                </IconButton>
              </Grid>
            ) : (
              <Grid item xs={2} md={2} lg={2} className="center-flex">
                <IconButton
                  onClick={() => resetCurrentRecord()}
                  sx={{ backgroundColor: "var(--primary)" }}
                >
                  <RestartAltIcon
                    color="secondary"
                    sx={{
                      fontSize: "30px",
                      "&hover": { color: "var(--primary" },
                    }}
                  />
                </IconButton>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
      <ExperienceRecord record={experienceData[currentRecord]} />

      {/* 
      <div className="next-arrow-icon-education">

        <IconButton onClick={() => props.scrollTo("#projects")}>
          <KeyboardDoubleArrowDownIcon
            color="primary"
            sx={{ fontSize: "40px", "&:hover": { color: "black" } }}
          />
        </IconButton>

      </div> */}
    </Grid>
  );
}

export default Experience;
