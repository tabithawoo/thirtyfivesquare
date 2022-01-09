import React from "react";
import { Grid, Paper } from "@mui/material";
import { Link as GatsbyLink } from "gatsby";

export function MiniNavGrid() {
  return (
    <Paper elevation={2}>
      <Grid container sx={{ height: "15px" }}>
        <Grid
          item
          xs={6}
          sx={{ backgroundColor: "#F35C5B" }}
          component={GatsbyLink}
          to="/"
        ></Grid>
        <Grid
          item
          xs={2}
          sx={{ backgroundColor: "#E9590C" }}
          component={GatsbyLink}
          to="/news"
        ></Grid>
        <Grid
          item
          xs={2}
          sx={{ backgroundColor: "#E9C00C" }}
          component={GatsbyLink}
          to="/about"
        ></Grid>
        <Grid
          item
          xs={2}
          sx={{ backgroundColor: "#04621B" }}
          component={GatsbyLink}
          to="/work"
        ></Grid>
      </Grid>
    </Paper>
  );
}
