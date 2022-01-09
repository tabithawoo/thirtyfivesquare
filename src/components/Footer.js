import React from 'react';
import {AppBar,Container,IconButton,Link} from '@mui/material';
import {Facebook,Instagram} from '@mui/icons-material/'

const iconsStyle = {padding:0, margin:'2px', color:'#FAFAFA'};

export function Footer() {
  return (
      <AppBar 
        sx={{
          top:'auto',
          bottom: 0,
          height: {xs:'55px',md:'30px'}
        }} 
        color='primary' position='absolute' elevation={2}>  
        <Container sx={{display:'flex',height:'100%',justifyContent:'center',alignItems:'center'}}>
          <Link href='https://www.facebook.com/thirtyfivesquare/' underline="hover">
            <IconButton
              sx={{...iconsStyle}}
              aria-label='Link to Thirty Five Square Facebook'
              size="large">
              <Facebook/>
            </IconButton>
          </Link>
          <Link href='https://www.instagram.com/thirtyfivesquare/' underline="hover">
            <IconButton
              sx={{...iconsStyle}}
              aria-label='Link to Thirty Five Square Instagram'
              size="large">
              <Instagram/>
            </IconButton> 
          </Link>  
        </Container>   
      </AppBar>
  );
}

