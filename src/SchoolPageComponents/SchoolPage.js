import React from "react";
import "./SchoolPage.css";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  CardHeader,
  Card,
  CardContent,
  Container,
} from "@material-ui/core/";

function SchoolPage(props) {
  let stats = [
    {
      title: "Current Total Cases",
      stat: props.stats.pos_cases,
    },
    {
      title: "Total Tests to Date",
      stat: props.stats.total_Tests,
    },
    {
      title: "7 Day Positivity Rate",
      stat: props.stats.pos_rate + "%",
    },
    {
      title: "Total in Isolation",
      stat: props.stats.isolation,
    },
  ];
  let policies = [
    {
      title: "Mandatory Testing",
      policy: props.policies.frequency,
    },
    {
      title: "People being tested",
      policy: props.policies.people,
    },
    {
      title: "Type of Classes",
      policy: props.policies.classes + "%",
    },
    {
      title: "Symptom Checkins?",
      policy: props.policies.checkin,
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

      <Grid container align="center" justify="center">
        {stats.map((x, key) => (
          <Grid item xs={12} m={6} l={6} xl={6} spacing={10}>
            <Box mr={5} ml={5} mt={3}>
              <Card style={cardStyle} raised={true}>
                <CardHeader className="header" title={x.title} component="h1" />
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
      <Container maxWidth="xl">
        <Box style={{ marginTop: 20 }} boxShadow={4}>
          <Typography variant="h3" align="center">
            Mitigation Policies
          </Typography>
          <List>
              {
                policies.map ( (x) => (
            <ListItem>
                  <ListItemText
                    secondary={
                      <Typography variant="body1">
                        {x.title}
                      </Typography>
                    }
                    primary={
                      <Typography variant="h4">
                        {x.policy}
                      </Typography>
                    }
                  />
            </ListItem>
                ))

              }
          </List>
        </Box>
      </Container>
    </div>
  );
}

const cardStyle = {
  height: "100%",
};

export default SchoolPage;
