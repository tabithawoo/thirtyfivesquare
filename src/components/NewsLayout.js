import React from 'react';
import {Box,Grid} from '@material-ui/core';
import NewsImage from '../images/NewsLight.png';
import {Layout,NewsList,NewsPost,Page } from './';
import {NewsTheme} from '../themes';

export function NewsLayout({post}) {
    return (
            <Layout>
            <Page sectionTheme={NewsTheme} title='News' headerImage={NewsImage}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                    <Box mt={4} mx={{xs: 2, sm: 5}}>
                        <NewsPost post={post}/>
                    </Box>                       
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box mt={4} px={1} pb={5}>
                        <NewsList/>
                        </Box>
                    </Grid>
                </Grid>
            </Page>
        </Layout>
    );
}
