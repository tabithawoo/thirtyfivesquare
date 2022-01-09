import React from "react";
import Moment from "react-moment";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import { Grid, Link, Typography } from "@mui/material";

export function NewsArchive() {
  const data = useStaticQuery(graphql`
    query archivePosts {
      allStrapiPost(sort: { fields: id, order: DESC }) {
        nodes {
          slug
          title
          published
          cover {
            url
          }
        }
      }
    }
  `);
  const posts = data.allStrapiPost.nodes;
  return (
    <Grid container sx={{ p: { xs: 1, md: 5 } }}>
      {posts.map((post, key) => {
        return (
          <>
            <Grid
              item
              xs={12}
              md={3}
              sx={{
                background: `url(${post.cover.url}) center/cover no-repeat`,
                height: "150px",
                borderRadius: "4px",
                zIndex: 10,
                mb: { md: 3 },
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              md={9}
              sx={{
                borderRadius: "0 4px 4px 0",
                height: { xs: "70px", md: "150px" },
                mt: { xs: 1, md: 0 },
                mb: { xs: 2, md: 3 },
                ml: { md: "-4px" },
                pt: { md: 1 },
                pl: { md: 3 },
                "&:hover": { backgroundColor: "primary.light" },
              }}
            >
              <Link
                component={GatsbyLink}
                to={`/news/${post.slug}`}
                underline="hover"
              >
                <Typography variant="h5">{post.title}</Typography>
                <Typography variant="body1" color="primary">
                  <Moment format="Do MMMM YYYY">{post.published}</Moment>
                </Typography>
              </Link>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
}
