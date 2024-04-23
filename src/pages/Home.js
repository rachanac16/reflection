import React from "react";
import { Grid, IconButton } from "@mui/material";
import Navbar from "../components/Navbar";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import SubjectIcon from "@mui/icons-material/Subject";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";


function Home(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Grid container className="App-container" id="home">
      <Grid
        item
        container
        direction="row"
        xs={12}
        md={7}
        lg={6}
        className="bg-secondary"
      >
        <Grid item container xs={0} md={6} lg={6}></Grid>
        <Grid item container xs={0} md={6} lg={6} className="bg-primary">
          <div className="image-container-main"></div>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={12}
        md={5}
        lg={6}
        className="minimal-block-header bg-primary"
      >
        <Grid
          item
          xs={4}
          md={5}
          lg={5}
          className="display-flex-end header color-secondary"
        >
          Rachana Chaudhari
        </Grid>
        <Grid item xs={1} md={1} lg={1} pt={1}>
          <Navbar scrollTo={props.scrollTo} id="homelink" />
        </Grid>
        <Grid item xs={4} md={1} lg={1} className="display-flex-start">
          <IconButton
            color="secondary"
            onClick={() =>
              openInNewTab("https://www.linkedin.com/in/rachana-chaudhari/")
            }
          >
            <LinkedInIcon
              sx={{ fontSize: "30px", "&:hover": { color: "black" } }}
            />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => openInNewTab("https://github.com/rachanac16")}
          >
            <GitHubIcon
              sx={{ fontSize: "30px", "&:hover": { color: "black" } }}
            />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => openInNewTab("mailto:rc774@cornell.edu")}
          >
            <EmailIcon
              sx={{ fontSize: "30px", "&:hover": { color: "black" } }}
            />
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() =>
              openInNewTab(
                "https://drive.google.com/file/d/1BMvEDBSyfUHtTUZ2qkFHyVNlF2ShcFrN/view?usp=share_link",
              )
            }
          >
            <SubjectIcon
              sx={{ fontSize: "30px", "&:hover": { color: "black" } }}
            />
          </IconButton>
        </Grid>
        <Grid
        item
        container
        xs={4} md={5} lg={5}
        className="center-flex bg-primary"
      >
        <IconButton onClick={() => props.scrollTo("#about")}>
          <KeyboardDoubleArrowDownIcon
            color="secondary"
            sx={{ fontSize: "40px", "&:hover": { color: "#000000" } }}
          />
        </IconButton>
      </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
