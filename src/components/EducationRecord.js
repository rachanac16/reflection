import React, { useState } from "react";
import { Grid, Avatar } from "@mui/material";

function EducationRecord(props) {
  const [record, setRecord] = useState(props.record);

  return (
    <Grid item container xs={12} md={6} lg={6} className="bg-white">
      <Grid
        item
        container
        direction="column"
        xs={0}
        md={1}
        lg={1}
        className="bg-primary"
      >
        <Grid item xs={2} md={2} lg={2} className="bg-white"></Grid>
        <Grid item xs={10} md={8} lg={8}></Grid>
        <Grid item xs={0} md={2} lg={2} className="bg-white"></Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={3}
        md={3}
        lg={3}
        className="bg-primary"
      >
        <Grid item xs={2} md={4} lg={4}>
          <Avatar
            alt={record.universityName}
            src={record.icon}
            sx={{ height: "100%", width: "100%" }}
            variant="square"
          />
        </Grid>
        <Grid item direction="column" xs={10} md={6} lg={6}></Grid>
        <Grid item xs={0} md={2} lg={2} className="bg-white"></Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={9}
        md={8}
        lg={8}
        className="padding2"
        spacing={2}
      >
        <Grid item className="sub-header-2">
          {record.universityName}
        </Grid>
        <Grid item className="content-italic color-grey">
          {record.date}
        </Grid>
        <Grid item className="content">
          {record.degree}
        </Grid>
        <Grid item className="content">
          CGPA: {record.cgpa}
        </Grid>
        <Grid item className="content">
          {record.desc}
        </Grid>
        <Grid item className="content">
          <div className="content-italic">RELEVENT COURSEWORK</div>
          <ul>
            {record.relevantCoursework.map((course) => (
              <li>{course}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EducationRecord;
