import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Link as GatsbyLink} from 'gatsby';

const useStyles = makeStyles({
    miniNavGrid: {
        height: '15px'
    },
    homeLink: {
        backgroundColor: '#F35C5B'
    },
    newsLink: {
        backgroundColor: '#E9590C'
    },
    aboutLink: {
        backgroundColor: '#E9C00C'
    },
    workLink: {
        backgroundColor: '#04621B'
    }
});

export function MiniNavGrid() {
    const classes = useStyles();
    return (
    <Paper elevation={2}>
    <Grid container className={classes.miniNavGrid}>
        <Grid item xs={6} className={classes.homeLink} component={GatsbyLink} to='/'>
        </Grid>       
        <Grid item xs={2} className={classes.newsLink} component={GatsbyLink} to='/news'>
        </Grid>
          <Grid item xs={2} className={classes.aboutLink} component={GatsbyLink} to='/about'>
          </Grid>
        <Grid item xs={2} className={classes.workLink} component={GatsbyLink} to='/work'>
        </Grid>
    </Grid>
    </Paper>
    );
}