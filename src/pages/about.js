import React from 'react';
import {Box,Typography} from '@material-ui/core';
import AboutImage from '../images/AboutCactus.png';
import { Layout, Page } from '../components';
import {AboutTheme} from '../themes';

export default function About() {
        return (    
            <Layout>
            <Page sectionTheme={AboutTheme} title='About' headerImage={AboutImage}>
            <Box p={{xs: 2, sm: 4}}>
            <Typography variant='h6'>            
            35m<sup>2</sup> is the minimum floor space required for a new studio apartment in Sydney.
            </Typography>
            <Typography variant='body1'>
            <p>Thirty Five Square is a theatre company inspired by cities and the people who live in them.</p>
            <p>We produce deeply-researched plays with a generous twist of absurdism and a dash of genre-bending. We build universes in shoeboxes.</p>         
            </Typography>
            <Typography variant='body2'>
            <p>Things we like:</p>
            <ul>
                <li>Side streets and laneways</li>
                <li>Laundry drying on balconies</li>
                <li>Patterned wallpaper</li>
                <li>The silence of a 6am commuter train carriage</li>
                <li>The noise of a night bus</li>
                <li>Neatly folded reusable shopping bags</li>
            </ul>
            </Typography>
            </Box>
           </Page>
           </Layout>
    );
}
