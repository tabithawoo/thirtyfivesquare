import React from 'react';
import {Box,Card,IconButton,Link,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {Close,Facebook,Instagram} from '@material-ui/icons/'

const useStyles = makeStyles(theme => ({
    contactText: {
        paddingTop: theme.spacing(3),
    },
    modalContainer: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        position: 'relative',
      maxWidth: '600px',
      padding: theme.spacing(4),
    },
    icon: {
        position: 'absolute',
        top: theme.spacing(1),
        right: theme.spacing(1)
    },
    socialIcon: {
        padding: 0,
        color: '#000000',
    }
  }));
  

export function Contact(props){
    const classes = useStyles();

    return(
        <div className={classes.modalContainer} {...props}>
            <Card className={classes.paper}>
                <Typography variant='h2' id='modal-title' color='secondary' className={classes.heading}>Contact</Typography>
                <IconButton color='secondary' onClick={props.onClose} className={classes.icon}>
                    <Close/>
                </IconButton>
                <div id='modal-description'>
                <Box fontStyle='italic' borderTop={2} borderColor='secondary.main' pt={2} mt={1} mb={1}><Typography variant='body1'>Drop a line any time to chat theatre, storytelling and vegetarian food. Also keen to swap cute cat pics.</Typography></Box>
                <Typography variant='body1' className={classes.contactText}>Email: <Link href='mailto:tabitha@thirtyfivesquare.com'>tabitha@thirtyfivesquare.com</Link></Typography>
                <Typography variant='body1' className={classes.contactText}><Link href='https://www.facebook.com/thirtyfivesquare/'><IconButton className={classes.socialIcon}><Facebook/></IconButton> @thirtyfivesquare on Facebook</Link></Typography>
                <Typography variant='body1' className={classes.contactText}><Link href='https://www.instagram.com/thirtyfivesquare/'><IconButton className={classes.socialIcon}><Instagram/></IconButton> @thirtyfivesquare on Instagram</Link></Typography>
                </div>
            </Card>   
        </div>
    );
}
