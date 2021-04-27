import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {AppBar,Box,Button,Divider,Fade,IconButton,Link,Menu,MenuItem,Modal,Toolbar} from '@material-ui/core';
import {Link as GatsbyLink} from 'gatsby';
import {Contact} from './';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderLogo from '../images/logos/logo-wide-bw.png';

const useStyles = makeStyles(theme => ({
  navMenu: {
    marginTop: '45px',
    width: '200px',
    padding: theme.spacing(1),
  },
  menuDivider: {
    marginTop: '10px',
    marginBottom: '10px',
    backgroundColor: '#444444',
  },
  newsItem: {
    '&:hover': {
      backgroundColor: '#FBCEB6',
    }
  },
  aboutItem: {
    '&:hover': {
      backgroundColor: '#FBEFB6',
    }
  },
  workItem: {
    '&:hover': {
      backgroundColor: '#A3E4B3',
    }
  },
  homeItem: {
    '&:hover': {
      backgroundColor: '#FAB8B8',
    }
  },
  logoContainer: {
    marginLeft: theme.spacing(4),
    flexGrow: 1
  },
  logo: {
    height: '50px'
  },
  contactButton: {
    color: '#FAFAFA',
    backgroundColor: theme.palette.primary.main,
   '&:hover': {
    backgroundColor: theme.palette.secondary.main,
   },
  },
}));

export function Header() {
  const classes = useStyles();
  const [openModal,setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = e => setAnchorEl(e.currentTarget);
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const openContact = () => {
    if(anchorEl!==null){
      setAnchorEl(null);
    } 
    setOpenModal(true);
  }
  const closeContact = () => {
    setOpenModal(false);
  }

  return(
    <div>
      <AppBar color='transparent' position='sticky' elevation={0}>
      <Toolbar>
      <IconButton 
          aria-controls='navigation-menu'
          onClick={handleMenuOpen}
          edge="start" 
          color="inherit" 
          aria-label="menu">
          <MenuIcon />
        </IconButton>  
      <Link to='/' component={GatsbyLink} className={classes.logoContainer}>
          <img className={classes.logo} src={HeaderLogo} alt="Thirty Five Square logo"/>
        </Link>       
        <Box component={Button} variant='contained' size='large' className={classes.contactButton} onClick={openContact} display={{ xs: 'none', sm: 'block' }}>Contact</Box>
      </Toolbar>
      </AppBar>
    <Modal 
      open={openModal} 
      onClose={closeContact}
      closeAfterTransition
      aria-labelledby="modal-title"
      aria-describedby="modal-description">
        <Fade 
          in={openModal}
          timeout={400}
          mountOnEnter
          unmountOnExit>
          <Contact onClose={closeContact}/>
        </Fade>
    </Modal>
    <Menu id='navigation-menu' 
    keepMounted
    anchorEl={anchorEl} 
    open={Boolean(anchorEl)} 
    onClose={handleMenuClose}
    PaperProps={{className: classes.navMenu}}
    elevation={1}>
      <MenuItem component={GatsbyLink} to='/' classes={{root: classes.homeItem}} onClick={handleMenuClose}>
      Home
      </MenuItem>  
      <Divider variant='middle' className={classes.menuDivider}/>
      <MenuItem component={GatsbyLink} to='/news' classes={{root: classes.newsItem}} onClick={handleMenuClose}>
        News
      </MenuItem>     
      <MenuItem component={GatsbyLink} to='/about' classes={{root: classes.aboutItem}} onClick={handleMenuClose}>
        About      
      </MenuItem>      
      <MenuItem component={GatsbyLink} to='/work' classes={{root: classes.workItem}} onClick={handleMenuClose}>
        Work
      </MenuItem>
      <Divider variant='middle' className={classes.menuDivider}/>
      <MenuItem classes={{root: classes.aboutItem}} onClick={openContact}>Contact</MenuItem>   
    </Menu>
    </div>

  );
}
