import { Card, CardContent, CardMedia, Grid, IconButton } from "@mui/material";
import React from "react";
import onlineprintshop from "./../assets/icons/onlineprintshop.jpg";
import skinscanapi from "./../assets/icons/skinscanapi.jpg";
import MIB from "./../assets/icons/MIB.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Navbar from "../components/Navbar";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

function Projects(props) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Grid container className="App-container" id="projects">
      <Grid item container xs={12} md={6} lg={6} className="bg-white" p={5}>
        <Navbar scrollTo={props.scrollTo} id="projectslink" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        lg={6}
        className="main-header center-flex"
        p={5}
      >
        PROJECTS
      </Grid>
      <Grid item xs={12} md={4} lg={4} p={2} className="content">
        <Card sx={{ maxWidth: 500, minHeight: 550 }}>
          <CardMedia
            component="img"
            height="194"
            image={skinscanapi}
            alt="Skin Scan API"
          />
          <CardContent>
            <div className="content-big letter-spacing padding2">
              SKIN SCAN API
            </div>
            <br />
            <div className="content-small color-grey padding2">
              JUN 2021 - AUG 2021
            </div>
            <div className="content padding2">
              Developed an API that classifies an image of a skin section into
              different skin diseases and informs if it is normal, built using
              flask framework in python and deployed the CNN model in Azure
              Cloud
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} lg={4} p={2} className="content">
        <Card sx={{ maxWidth: 500, minHeight: 550 }}>
          <CardMedia component="img" height="194" image={MIB} alt="MIB" />

          <CardContent>
            <div className="content-big letter-spacing padding2">
              MULTI-OUTPUT INCREMENTAL BACKPROPAGATION (Submitted)
              <IconButton
                color="buttonColor"
                onClick={() =>
                  openInNewTab(
                    "https://drive.google.com/file/d/1iBr5EFQnRm7ZSppvwi0ZB4nDpTv9HUql/view?usp=share_link",
                  )
                }
              >
                <PictureAsPdfIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>
            <div className="content-small color-grey padding2">
              AUG 2020 - FEB 2021
            </div>
            <div className="content padding2">
              Designed and tested deep learning models with the proposed
              architecture model and achieved a 10% reduction in time compared
              to a standard neural network. <br />
              Eliminated trial and error method of obtaining the optimal number
              of layers by incrementally adding layers from the start and
              achieved a 2 percent higher accuracy than the standard model
            </div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4} lg={4} p={2} className="content">
        <Card sx={{ maxWidth: 500, minHeight: 550 }}>
          <CardMedia
            component="img"
            height="194"
            image={onlineprintshop}
            alt="Online printing shop"
          />
          <CardContent>
            <div className="content-big letter-spacing padding2">
              ONLINE PRINTING SHOP
              <IconButton
                color="buttonColor"
                onClick={() =>
                  openInNewTab("https://github.com/rachanac16/OnlinePrintShop")
                }
              >
                <GitHubIcon sx={{ fontSize: "30px" }} />
              </IconButton>
            </div>
            <br />
            <div className="content-small color-grey padding2">
              JAN 2019 - JAN 2020
            </div>
            <div className="content padding2">
              Built an online platform to place orders for printing documents
              that also efficiently calculates the ETA of the documents and
              handles alerts admins about low resources.
              <br /> Used MySQL for database, ReactJS for frontend, Spring boot
              for backend with factory and singleton design patterns to reduce
              startup time and make the application memory efficient by
              exploiting Spring boot’s bean configurations
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        container
        xs={12}
        md={12}
        lg={12}
        className="center-flex bg-primary"
      >
        <IconButton onClick={() => props.scrollTo("#home")}>
          <KeyboardDoubleArrowUpIcon
            color="secondary"
            sx={{ fontSize: "30px", "&:hover": { color: "#000000" } }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default Projects;
