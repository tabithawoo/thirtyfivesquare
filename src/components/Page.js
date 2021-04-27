import React from 'react';
import {Box,Container,Grid,Paper,ThemeProvider,Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { MiniNavGrid } from './';
import {motion} from 'framer-motion';

const useStyles = makeStyles(theme => ({
    pageHeader: {
        paddingLeft: theme.spacing(4)
    },
    pageHeaderContainer: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    pageImage: {
        [theme.breakpoints.down('sm')]: {       
            height: '150px'
        },
        [theme.breakpoints.up('sm')]: {       
        height: '200px'
        },
       
    },
}));

export function Page(props) {
    const classes = useStyles();

    const {children, sectionTheme, title, headerImage} = props;

        return (
        <div>
            <MiniNavGrid/>
            <ThemeProvider theme={sectionTheme}>
                <Container maxWidth='lg' disableGutters>
                <Grid container>
                <Grid container item xs={12} className={classes.pageHeaderContainer}>
                        <Grid item 
                            component={motion.div}
                            initial={{opacity: 0, x: '-200px'}} 
                            animate={{opacity: 1, x: '0'}} 
                            exit={{opacity: 0}} 
                            transition={{
                                ease: 'linear',
                                duration: 0.5,
                            }}
                            >
                        <Typography variant='h1' color='primary' className={classes.pageHeader}>{title}</Typography>
                        </Grid>
                        <Grid item
                            component={motion.div}
                            initial={{opacity: 0, x: '200px'}} 
                            animate={{opacity: 1, x: '0'}} 
                            exit={{opacity: 0}} 
                            transition={{
                                ease: 'linear',
                                duration: 0.5,
                            }}
                            >
                            <img src={headerImage} alt='Vase' className={classes.pageImage}/>
                        </Grid>
                </Grid>
                    <Grid item xs={12}>
                        <Box borderTop={2} borderColor='primary.main'>
                        <Paper elevation={4} square
                            component={motion.div}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{
                                duration: 1
                            }}
                        >
                        {children}
                        </Paper>
                        </Box>
                    </Grid>
                </Grid>
                </Container>
            </ThemeProvider>
        </div>
    );
}
