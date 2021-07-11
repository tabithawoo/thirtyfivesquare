import React from 'react';
import {makeStyles,ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {HomeTheme} from '../themes';
import {Footer,Head,Header} from './';

const useStyles = makeStyles({
  layoutContainer: {
    position: 'relative',
    minHeight: '100vh',
      paddingBottom: '60px'
  },
});

export function Layout(props) {
  const classes = useStyles();
  const {children, ...metadata} = props;
  return (
    <>
    <Head {...metadata}/>
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
