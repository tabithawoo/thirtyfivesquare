import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar,Container,IconButton,Link} from '@material-ui/core';
import {Facebook,Instagram} from '@material-ui/icons/'


const useStyles = makeStyles(theme => ({
    footer: {
      top: 'auto',
      bottom: 0,
      [theme.breakpoints.down('sm')]: {
        height: '55px',
      },
      [theme.breakpoints.up('sm')]: {
        height: '30px',
      }
    },
    innerFooter: {
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcons:{
      padding: '0px',
      margin: '2px',
      color: '#FAFAFA',
    }
  }));
  

export function Footer() {
    const classes=useStyles();
    return(
        <AppBar className={classes.footer} color='primary' position='absolute' elevation={2}>  
        <Container className={classes.innerFooter}>
        <Link href='https://www.facebook.com/thirtyfivesquare/'>
            <IconButton className={classes.socialIcons} aria-label='Link to Thirty Five Square Facebook'><Facebook/></IconButton>
        </Link>
        <Link href='https://www.instagram.com/thirtyfivesquare/'>
            <IconButton className={classes.socialIcons} aria-label='Link to Thirty Five Square Instagram'><Instagram/></IconButton> 
        </Link>  
        </Container>   
        </AppBar>
    );
}

