import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
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
      <CssBaseline/>
      <div className={classes.layoutContainer}>
      <Header/>
      {children}
      <Footer/>
    </div>
    </>
  );
}
