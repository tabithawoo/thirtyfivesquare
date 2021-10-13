import React from 'react';
import {Box, Card, Container, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Layout,NavGrid} from '../components';

const useStyles = makeStyles(theme => ({
    acknowledgementCard: {
      padding: theme.spacing(3),
      display: 'block',
    },
}));

export default function Index() {
    const classes = useStyles();
    return (
        <Layout
            pageTitle="Home" 
        >
        <Grid container>
        <Grid item xs={12}>
            <NavGrid/>
        </Grid>
        <Grid item xs={12}>
        <Container 
            component={Box} 
            maxWidth='md'
            mt={4}
            px={{xs:1, sm: 10}}
            mb={4}
            >
            <Card elevation={4} className={classes.acknowledgementCard}>
                <Typography variant='h6' color='primary' gutterBottom>Acknowledgement of Country</Typography>
                <Typography variant='body1' gutterBottom>Thirty Five Square works, plays, writes and makes on Aboriginal land.</Typography>
                <Typography variant='body1' gutterBottom>We acknowledge the traditional custodians of this land, the Gadigal people of the Eora Nation, and pay respects to Elders past and present.</Typography>
                <Typography variant='body1' gutterBottom><strong>Always Was, Always Will Be.</strong></Typography>
            </Card>
        </Container>
        </Grid>       
        </Grid>
        </Layout>
    );
}