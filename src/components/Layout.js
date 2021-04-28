import React from 'react';
import {Helmet} from 'react-helmet';
import {makeStyles,ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {HomeTheme} from '../themes';
import {Footer,Header} from './';

const useStyles = makeStyles({
  layoutContainer: {
    position: 'relative',
    minHeight: '100vh',
    paddingBottom: '30px'
  },
});

export function Layout({children}) {
  const classes = useStyles();
  return (
    <>
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
    </Helmet>
    <ThemeProvider theme={HomeTheme}>
      <CssBaseline/>
    <div className={classes.layoutContainer}>
      <Header/>
      {children}
      <Footer/>
    </div>
    </ThemeProvider>
    </>
  );
}
