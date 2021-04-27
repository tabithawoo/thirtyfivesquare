import React from 'react';
import {Grid,Link,Paper,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {motion} from 'framer-motion';
import {Link as GatsbyLink} from 'gatsby';
import MainLogo from '../images/logos/logo-main.png';
import HomeImage from '../images/HomeDuck.png';
import AboutImage from '../images/AboutCactus.png';
import WorkImage from '../images/WorkCups.png';
import NewsImage from '../images/NewsLight.png';

const useStyles = makeStyles(theme => ({
  homeBlock: {
    backgroundImage: 'linear-gradient(#F35C5B, #f78282);',
    height: '65vh',
    position: 'relative',
  },
  newsBlock: {
      backgroundImage: 'linear-gradient(#E9590C,#f78143)',
      overflow: 'hidden',
      height: '65vh',
  },
  newsLink: {
    color: '#FFFFFF',
  },
  aboutBlock: {
      backgroundImage: 'linear-gradient(#E9C00C,#f6db67)',
      overflow: 'hidden',
      height: '65vh'
  },
  workBlock: {
      backgroundImage: 'linear-gradient(#04621B,#1b9c3b)',
      overflow: 'hidden',
      height: '65vh'
  },
  headerStyle: {
    position: 'relative',
    bottom: '60%',
  },
  navBlockImage: {
    height: '64vh',
    position: 'relative',
    top: '1vh',
  },
  homeBlockImage: {
    position: 'absolute',    
    [theme.breakpoints.down('sm')]: {
      width: '90vw',
      maxWidth: '360px',
      left: '5px',
      top: 'calc(60vh - 250px)',
    },
    [theme.breakpoints.up('sm')]: {
      width: '360px',
      left: '15px',
      top: '60px',
    },
    [theme.breakpoints.up('md')]: {
      height: '50vh',
      width: 'auto',
      left: '50px',
      top: '90px',
    }, 
  },
  mainLogo: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    [theme.breakpoints.down('sm')]: {    
      width: '95vw',
      maxWidth: '380px',
      left: 0,
      right: 0,
      margin: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      height: '64vh',
      width: 'auto',
      maxWidth: '440px',
      right: theme.spacing(0.5),
    }
  }
}));

export function NavGrid() {
    const classes = useStyles();
    return (
    <Grid container component={Paper} elevation={4}>
        <Grid item xs={12} md={6} className={classes.homeBlock}>       
        <img className={classes.mainLogo} src={MainLogo} alt="The Thirty Five Square logo is the business name inside a watercolour square"/>
        <motion.div 
          initial={{x: '-120px', y: '0'}} 
          animate={{x: '0', y: [-50,0,-50,0,-50,0]}} 
          transition={{
              ease: 'linear',
              duration: 2,
          }}>
        <img className={classes.homeBlockImage} src={HomeImage} alt="Duck"/>       
        </motion.div>
        </Grid>       
        <Grid item xs={12} md={2} className={classes.newsBlock}>
        <img className={classes.navBlockImage} src={NewsImage} alt="Bike"/>
          <Link component={GatsbyLink} to='/news' className={classes.newsLink}>
            <Typography className={classes.headerStyle} variant='h3' align='center'>News</Typography>
          </Link>
        </Grid>
          <Grid item xs={12} md={2} className={classes.aboutBlock}>
          <img className={classes.navBlockImage} src={AboutImage} alt="Cactus"/>
            <Link component={GatsbyLink} to='/about' color='primary'>
              <Typography className={classes.headerStyle} variant='h3' align='center'>About</Typography>
            </Link>
          </Grid>
        <Grid item xs={12} md={2} className={classes.workBlock}>
          <img className={classes.navBlockImage} src={WorkImage} alt="Vase"/>
          <Link component={GatsbyLink} to='/work' color='inherit'>
            <Typography className={classes.headerStyle} variant='h3' align='center'>
              Work
            </Typography>
          </Link>
        </Grid>
    </Grid>
    );
}