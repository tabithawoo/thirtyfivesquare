import React from "react";
import { graphql } from "gatsby";
import { NewsLayout } from "../../components";

export default function Post({ data }) {
  const post = data.strapiPost;
  return <NewsLayout post={post} />;
}

export const query = graphql`
  query ($id: String!) {
    strapiPost(id: { eq: $id }) {
      slug
      title
      published
      cover {
        url
      }
      childStrapiPostMdxContent {
        childMdx {
          body
        }
      }
    }
  }
`;
