import {
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
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
    <Grid container className="App-container" id="experience">
      <Grid item container xs={12} md={6} lg={6} className="bg-white" p={5}>
        <Navbar scrollTo={props.scrollTo} id={"experiencelink"} />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="main-header center-flex"
        p={5}
      >
        EXPERIENCE
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
          <Grid item className="divider height100" xs={0} md={2} lg={2}></Grid>
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
                <Button
                  onClick={() => decreaseCurrentRecord()}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    "&:hover": { color: "#c0b3f3", backgroundColor: "#ffffff" },
                    backgroundColor: "#c0b3f3",
                  }}
                  className="button"
                >
                  PREV
                </Button>
              </Grid>
            )}
            <Grid
              item
              xs={8}
              md={8}
              lg={showArrowLeft ? 8 : 10}
              className="center-flex"
            >
              {experienceData[currentRecord].date}
            </Grid>
            <Grid item xs={2} md={2} lg={2} className="center-flex">
              {showArrowRight ? (
                <Button
                  onClick={() => increaseCurrentRecord()}
                  variant="outlined"
                  color="secondary"
                  sx={{
                    "&:hover": { color: "#c0b3f3", backgroundColor: "#ffffff" },
                    backgroundColor: "#c0b3f3",
                  }}
                  className="button"
                >
                  NEXT
                </Button>
              ) : (
                <IconButton onClick={() => resetCurrentRecord()}>
                  <RestartAltIcon
                    color="buttonColor"
                    sx={{ fontSize: "40px", "&:hover": { color: "#c0b3f3" } }}
                  />
                </IconButton>
              )}
            </Grid>
          </Grid>
          <Grid item className="divider height100" xs={0} md={5} lg={5}></Grid>
        </Grid>
      </Grid>
      <ExperienceRecord record={experienceData[currentRecord]} />

      <Grid
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
      </Grid>
    </Grid>
  );
}

export default Experience;
