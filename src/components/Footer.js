import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar,Container,IconButton,Link} from '@material-ui/core';
import {Facebook,Instagram} from '@material-ui/icons/'


const useStyles = makeStyles(theme => ({
    footer: {
      height: '25px',
      top: 'auto',
      bottom: 0,
    },
    innerFooter: {
        display: 'flex',
        justifyContent: 'center'
    },
    socialIcons:{
      padding: '0px',
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

