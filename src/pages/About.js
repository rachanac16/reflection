import { Grid, IconButton } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import woman from "../assets/woman-computer.png";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

function About(props) {
  return (
    <Grid
      container
      className="App-container"
      id="about"
      onWheel={() => {
        props.scrollTo("#education", "instant");
      }}
    >
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={9}
        lg={9}
        className="minimal-block-header bg-secondary"
      >
        <Grid item container xs={2}>
          <Navbar scrollTo={props.scrollTo} id="aboutlink" />
        </Grid>
        <Grid
          item
          container
          direction="column"
          xs={8}
          md={8}
          lg={8}
          className="body display-flex-start"
          sx={{ paddingLeft: "12rem", paddingRight: "12rem" }}
          // p={}
        >
          <Grid item xs={3} className="header color-primary display-flex-end">
            About Me
          </Grid>
          <Grid item xs={3} className="content display-flex-center">
            I am a dedicated Software Engineer determined to achieve success in
            creating, debugging, testing and deploying systems powered with AI
            to enhance life experiences in different aspects ranging from
            important day-to-day chores to pursuing a hobby. I cherish a
            fast-paced innovative environment with excellent interpersonal as
            well as communication skills.
          </Grid>
          <Grid item xs={3} className="content display-flex-start">
            I am always looking for inspiration in the fast paced lives led by
            technology and how I can assist without handicapping people from
            achieving goals.
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        direction="column"
        container
        xs={12}
        md={3}
        lg={3}
        className="bg-primary"
      >
        <img src={woman} className="image-container-about" />
        {/* <div className="next-arrow-icon">
          <IconButton onClick={() => props.scrollTo("#education")}>
            <KeyboardDoubleArrowDownIcon
              color="secondary"
              sx={{ fontSize: "40px", "&:hover": { color: "#000000" } }}
            />
          </IconButton>
        </div> */}
      </Grid>
    </Grid>
  );
}

export default About;
