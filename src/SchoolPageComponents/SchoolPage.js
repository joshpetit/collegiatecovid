import React from "react";
import "./SchoolPage.css";
import {
  Box,
  Grid,
  Typography,
  CardHeader,
  Card,
  CardContent,
} from "@material-ui/core/";
import PolicySection from "./PolicySection";

function SchoolPage(props) {
  let stats = [
    {
      title: "Total Cases",
      stat: props.stats.pos_cases,
    },
    {
      title: "Total Tests",
      stat: props.stats.total_Tests,
    },
    {
      title: "7 Day Positivity Rate",
      stat: props.stats.pos_rate + '%',
    },
    {
      title: "Total in Isolation",
      stat: props.stats.isolation,
    },
  ];
  return (
    <div id="school-page">
      <Typography
        component="h1"
        align="center"
        variant="h4"
        className="page-header"
      >
        <b>{props.name} Covid Tracker</b>
      </Typography>

      <Typography> 
      </Typography> 
      <Grid container align="center" justify="center">
        {stats.map((x, key) => (
          <Grid item xs={12} m={6} l={6} xl={6} spacing={10}>
            <Box mr={5} ml={5} mt={3}>
              <Card style={cardStyle} raised={true}>
                <CardHeader className='header' title={x.title} component="h1" />
                <CardContent>
                  <Typography variant="h2" align="center" color="secondary">
                    {x.stat == null ? "Unknown" : x.stat}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
      <PolicySection policies={props.policies} />
    </div>
  );
}

const cardStyle = {
  height: "100%",
};

export default SchoolPage;
