import React from 'react';
import {graphql} from 'gatsby';
import {NewsLayout} from '../../components';

export default function News({data}) {
    const post = data.strapiPost;

    return (
        <NewsLayout post={post}/>
    );
}

export const query = graphql`
    query($id: String!) {
        strapiPost(id: {eq: $id}) {
            slug
            title
            content
            published
            cover {
                url
            }
        }
    }
`
