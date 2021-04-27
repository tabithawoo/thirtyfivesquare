import React,{useEffect} from 'react';
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import {Box,Typography} from '@material-ui/core';
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
    }
  }
}));

export function NewsPost({post}) {
  const classes = useStyles();
    return(
    <Box mb={10}>
        <Typography variant='h2'>{post.title}</Typography>
        <Typography variant='body1' color='primary'><Moment format="Do MMMM YYYY">{post.published}</Moment></Typography>
      <Box mt={3} mb={10}>
          <ReactMarkdown source={post.content} className={classes.post}/>
      </Box>
      <img src={post.cover.url} alt={post.title} className={classes.coverImage}/>
    </Box>
    );
}


