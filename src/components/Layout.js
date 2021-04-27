import React from 'react';
import {Helmet} from 'react-helmet';
import {makeStyles} from '@material-ui/core/styles';
import {Footer,Header} from './';

const useStyles = makeStyles(theme => ({
  layoutContainer: {
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: '30px'
  },
}));

export function Layout({children}) {
  const classes = useStyles();
  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    </Helmet>
    <div className={classes.layoutContainer}>
      <Header/>
      {children}
      <Footer/>
    </div>
    </>
  );
}