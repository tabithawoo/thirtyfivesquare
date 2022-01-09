import React from "react";
import Moment from "react-moment";
import { Link as GatsbyLink, graphql, useStaticQuery } from "gatsby";
import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

export function NewsList() {
  const data = useStaticQuery(graphql`
    query allPosts {
      allStrapiPost(sort: { fields: id, order: DESC }, limit: 3) {
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
  return data.allStrapiPost.nodes.map((post, key) => {
    return (
      <Link component={GatsbyLink} to={`/news/${post.slug}`} underline="hover">
        <Card sx={{mb:3,backgroundColor:'primary.light'}} elevation={0}>
          <CardContent>
            <Typography variant="h5" color="primary">
              {post.title}
            </Typography>
            <Typography variant="body1" color="primary">
              <Moment format="Do MMMM YYYY">{post.published}</Moment>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            src={post.cover.url}
            sx={{height:'200px'}}
          />
        </Card>
      </Link>
    );
  });
}
