import React from "react";
import Moment from "react-moment";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import { Grid, Link, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
  },
  thumbnail: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "150px",
    borderRadius: "4px",
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
    },
  },
  title: {
    borderRadius: '4px',
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
      marginBottom: theme.spacing(3),
      "&:hover": {
        backgroundColor: theme.palette.primary.light,
      },
    },
  },
}));

export function NewsArchive() {
  const classes = useStyles();
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
    <Grid container className={classes.container}>
      {posts.map((post, key) => {
        return (
          <>
            <Grid
              item
              xs={12}
              sm={3}
              className={classes.thumbnail}
              style={{ backgroundImage: `url(${post.cover.url})` }}
            ></Grid>
            <Grid item xs={12} sm={9} className={classes.title}>
              <Link component={GatsbyLink} to={`/news/${post.slug}`}>
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

