import React from 'react';
import ReactMarkdown from "react-markdown";
import {Box,Grid,Link,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ProductionDetails} from './';

const useStyles = makeStyles(theme => ({
    panelContainer: {
        paddingBottom: theme.spacing(10),
    },
    coverImage: {
        width: '100%',
        display: 'block',
        margin: 'auto',
    },
}));

export function WorkPanel({productions,work}) {
    const classes = useStyles();

    return(
        <Grid container className={classes.panelContainer}>
        <Box clone order={{ xs: 2, sm: 1 }}>
        <Grid item xs={12} sm={4}>
            {work.reviews.map((review) => {
                return (
                <Box mt={{xs: 2, sm: 7}} mx={{xs: 2, sm: 4}}>
                <Typography variant='body1'>{review.snippet}</Typography>
                <Typography variant='subtitle1' color='primary'>{review.author}, <Link href={review.source}>{review.publication}</Link></Typography>
                </Box>
                );
            })}
        </Grid>
        </Box>
        <Box clone order={{ xs: 1, sm: 2 }}>
        <Grid item xs={12} sm={8}>
            <Box mt={5} mx={{xs: 2, sm: 6}}>
            <img src={work.cover.url} alt={work.title} className={classes.coverImage}/>
            <Typography variant='h2'>{work.title}</Typography>
            <Box mt={3} mb={5}>
                <ReactMarkdown source={work.description}/>
                <Typography variant='h6'>Media</Typography>
                <Box mb={2}>
                {work.presses.map((p)=>{
                    return(
                        <Typography variant='body1'>{p.publication}: <Link href={p.url}>{p.title}</Link></Typography>
                    );
                })}
                </Box> 
                {productions.map((p)=>{
                    return(
                        <ProductionDetails production={p}/>
                    );
                })} 
            </Box>
            </Box>
        </Grid>
        </Box>
        </Grid>
    );
}