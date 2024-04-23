import React, { useEffect, useState } from "react";
import { Avatar, Grid } from "@mui/material";

function ExperienceRecord(props) {
  const [record, setRecord] = useState(props.record);

  useEffect(() => {
    setRecord(props.record);
  }, [props.record]);

  return (
    <Grid
      item
      container
      xs={12}
      md={12}
      lg={12}
      className="bg-secondary center-flex-stretch"
      p={2}
      sx={{ height: "60%" }}
    >
      <Grid item xs={2} md={2} lg={2} className="display-flex-center">
        <Avatar
          alt={record.companyName}
          src={record.icon}
          sx={{ height: "15vw", width: "15vw", borderRadius: "2rem" }}
          variant="square"
        />
      </Grid>
      <Grid
        item
        container
        direction="column"
        xs={10}
        md={6}
        lg={6}
        p={3}
        spacing={2}
      >
        <Grid item className="sub-header">
          {record.companyName}
        </Grid>

        <Grid item className="body content">
          {record.position}, {record.location}
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
        <Grid item className="body content">
          {record.desc}
        </Grid>
        <Grid item className="body content">
          {record.skills}
        </Grid>
        <Grid item className="content body">
          <div className="">Key Takeaways</div>
          <ul>
            {record.description.map((course, i) => (
              <li style={{ paddingBottom: "5px" }} key={i}>
                {course}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ExperienceRecord;
