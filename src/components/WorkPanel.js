import React from "react";
import ReactMarkdown from "react-markdown";
import { Box, Grid, Link, Typography } from "@mui/material";
import { ProductionDetails } from "./";

export function WorkPanel({ productions, work }) {
  return (
    <Grid container sx={{ pb: 10 }}>
      <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
        {work.reviews.map((review) => {
          return (
            <Box mt={{ xs: 2, sm: 7 }} px={{ xs: 2, sm: 4 }}>
              <Typography variant="body1">{review.snippet}</Typography>
              <Typography variant="subtitle1" color="primary">
                {review.author},{" "}
                <Link href={review.source} underline="hover">
                  {review.publication}
                </Link>
              </Typography>
            </Box>
          );
        })}
      </Grid>
      <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
        <Box mt={5} px={{ xs: 2, sm: 6 }}>
          <Box
            component="img"
            src={work.cover.url}
            alt={work.title}
            sx={{ width: "100%", display: "block", margin: "auto" }}
          />
          <Typography variant="h2">{work.title}</Typography>
          <Box mt={3} mb={5}>
            <ReactMarkdown source={work.description} />
            <Typography variant="h6">Media</Typography>
            <Box mb={2}>
              {work.presses.map((p) => {
                return (
                  <Typography variant="body1">
                    {p.publication}:{" "}
                    <Link href={p.url} underline="hover">
                      {p.title}
                    </Link>
                  </Typography>
                );
              })}
            </Box>
            {productions.map((p) => {
              return <ProductionDetails production={p} />;
            })}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
