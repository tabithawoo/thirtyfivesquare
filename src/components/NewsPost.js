import React from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import {Link as GatsbyLink} from 'gatsby';
import {NewsList} from './';
import {Box,Grid,Link,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  coverImage: {
    display: 'block',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      },
    [theme.breakpoints.up('sm')]: {
    width: '50%',
    }
  },
  post: {
    '& a': {
      color: theme.palette.primary.main,
    },
    '& a:visited': {
      color: theme.palette.primary.main,
    },
    '& img': {
      margins: 'auto',
      width: '200px',
    },
    '& h5': {
      fontSize: '1.2em'
    }
  }
}));

export function NewsPost({post}) {
  const classes = useStyles();
    return(
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box mt={4} mx={{xs: 2, sm: 5}} mb={10}>
            <Typography variant='h2'>{post.title}</Typography>
            <Typography variant='body1' color='primary'><Moment format="Do MMMM YYYY">{post.published}</Moment></Typography>
            <Box mt={3} mb={10}>
              <ReactMarkdown source={post.content} className={classes.post}/>
            </Box>
          </Box>                       
        </Grid>
        <Grid item xs={12} md={4}>
          <Box mt={4} px={1} pb={5}>
            <NewsList/>
            <Typography variant='h5' align='center'>
              <Link component={GatsbyLink} to={`/news/archive`}>See all posts</Link>
            </Typography>
          </Box>
        </Grid>
    </Grid>
  );
}


