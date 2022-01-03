import React from 'react';
import {graphql} from 'gatsby';
import {NewsLayout} from '../../components';

export default function News({data}) {
    const post = data.newestPost.nodes[0];
    return (
        <NewsLayout post={post}/>
);
}

export const query = graphql`
{
  newestPost: allStrapiPost(sort: {fields: id, order: DESC}, limit: 1) {
    nodes {
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
}`
