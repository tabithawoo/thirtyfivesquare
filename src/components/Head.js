import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import logo from '../images/logos/logo-main.png';
import favicon from '../images/logos/favicon.ico';

export function Head({ pageTitle, imageUrl, imageAlt }) {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    siteUrl,
                    title,
                    author
                }
            }
        }
    `);

    imageUrl = imageUrl || logo;
    imageUrl == logo ? imageAlt = "Thirty Five Square Logo" : imageAlt;
    
    return (
        <>
            <Helmet title={`${pageTitle} | ${data.site.siteMetadata.title}`} />
            <Helmet>
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    
                <link rel="icon" href={favicon} />
​
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="twitter:title" content={pageTitle}></meta>
                <meta name="twitter:image" content={imageUrl}></meta>
​
                <meta property="og:locale" content="en_GB" />
                <meta property="og:site_name" content={data.site.siteMetadata.title} />
                <meta property="og:title" content={pageTitle}></meta>
                <meta property="og:image" content={imageUrl}></meta>
                <meta property="og:image:alt" content={imageAlt}></meta>
            </Helmet>
        </>
    );
}
