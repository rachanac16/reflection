import React from "react";
import { Grid } from "@mui/material";

function Navbar(props) {
  return (
    <Grid
      item
      container
      xs={12}
      className="navbar center-flex"
      spacing={{ xs: 1, md: 3, lg: 3 }}
      style={{ paddingTop: "10px" }}
    >
      <Grid item>
        <a
          onClick={() => props.scrollTo("#home")}
          id="homelink"
          className={props.id === "homelink" && "color-primary"}
        >
          HOME
        </a>
      </Grid>
      <Grid item>
        <a
          onClick={() => props.scrollTo("#about")}
          id="aboutlink"
          className={props.id === "aboutlink" && "color-primary"}
        >
          ABOUT
        </a>
      </Grid>
      <Grid item>
        <a
          onClick={() => props.scrollTo("#education")}
          id="educationlink"
          className={props.id === "educationlink" && "color-primary"}
        >
          EDUCATION
        </a>
      </Grid>
      <Grid item>
        <a
          onClick={() => props.scrollTo("#experience")}
          id="experiencelink"
          className={props.id === "experiencelink" && "color-primary"}
        >
          EXPERIENCE
        </a>
      </Grid>
      <Grid item>
        <a
          onClick={() => props.scrollTo("#projects")}
          id="projectslink"
          className={props.id === "projectslink" && "color-primary"}
        >
          PROJECTS
        </a>
      </Grid>
    </Grid>
  );
}

export default Navbar;
