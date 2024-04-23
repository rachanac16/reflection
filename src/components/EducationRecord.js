import React, { useState } from "react";
import { Grid, Avatar } from "@mui/material";

function EducationRecord(props) {
  const [record, setRecord] = useState(props.record);

  return (
    <Grid item container xs={12} md={6} lg={6} className="bg-secondary" p={4}>
      <Grid
        item
        container
        direction="column"
        xs={3}
        md={3}
        lg={3}
        className="bg-secondary"
      >
        <Grid item xs={2} md={4} lg={4}>
          <Avatar
            alt={record.universityName}
            src={record.icon}
            sx={{
              height: "10rem",
              width: "10rem",
              border: "0.5rem solid var(--primary)",
            }}
            variant="circle"
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={9}
        md={8}
        lg={8}
        className="padding2 padding-left2"
        spacing={1}
      >
        <Grid item className="sub-header display-flex-center">
          {record.universityName}
        </Grid>
        <Grid item className="content body display-flex-center">
          {record.degree}
        </Grid>
        <Grid item>
          <hr
            style={{
              color: "var(--primary)",
              backgroundColor: "var(--primary)",
              height: 2,
              width: "100%",
            }}
          />
        </Grid>
        <Grid item className="content-bold body">
          {record.date}
        </Grid>
        <Grid item className="content body">
          CGPA: {record.cgpa}
        </Grid>
        <Grid item className="content-small body">
          {record.desc}
        </Grid>
        <Grid item className="content body">
          <div>Relevant Coursework</div>
          <ul>
            {record.relevantCoursework.map((course, i) => (
              <li key={i}>{course}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
      <Grid item xs={1} md={1} lg={1}></Grid>
    </Grid>
  );
}

export default EducationRecord;
