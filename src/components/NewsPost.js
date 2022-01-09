import React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import Moment from "react-moment";
import { Link as GatsbyLink } from "gatsby";
import { NewsList } from "./";
import { Box, Grid, Link, Typography } from "@mui/material";

export function NewsPost({ post }) {
  return (
    <Grid container>
      <Grid item xs={12} md={8}>
        <Box mt={4} mx={{ xs: 2, sm: 5 }} mb={10}>
          <Typography variant="h2">{post.title}</Typography>
          <Typography variant="body1" color="primary">
            <Moment format="Do MMMM YYYY">{post.published}</Moment>
          </Typography>
          <Box
            sx={{
              "& a": { color: "primary.main" },
              "& a:visited": { color: "primary.main" },
              "& img": { margins: "auto", width: "200px" },
              "& h5": { fontSize: "1.2em" },
            }}
            mt={3}
            mb={10}
          >
            <MDXRenderer>
              {post.childStrapiPostMdxContent.childMdx.body}
            </MDXRenderer>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box mt={4} px={1} pb={5}>
          <NewsList />
          <Typography variant="h5" align="center">
            <Link component={GatsbyLink} to={`/news/archive`} underline="hover">
              See all posts
            </Link>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}
