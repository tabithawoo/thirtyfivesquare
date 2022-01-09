import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Fade,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Modal,
  Toolbar,
} from "@mui/material";
import { Link as GatsbyLink } from "gatsby";
import { Contact } from "./";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderLogo from "../images/logos/logo-wide-bw.png";

export function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const openContact = () => {
    if (anchorEl !== null) {
      setAnchorEl(null);
    }
    setOpenModal(true);
  };
  const closeContact = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <AppBar color="transparent" position="sticky" elevation={0}>
        <Toolbar>
          <IconButton
            aria-controls="navigation-menu"
            onClick={handleMenuOpen}
            edge="start"
            color="inherit"
            aria-label="menu"
            size="large"
          >
            <MenuIcon />
          </IconButton>
          <Link
            to="/"
            component={GatsbyLink}
            sx={{
              ml: 4,
              flexGrow: 1,
            }}
            underline="hover"
          >
            <img height="50px" src={HeaderLogo} alt="Thirty Five Square logo" />
          </Link>
          <Box
            component={Button}
            variant="contained"
            size="large"
            sx={{
              color: "#FAFAFA",
              backgroundColor: "primary.main",
              display: { xs: "none", sm: "block" },
              "&:hover": { backgroundColor: "secondary.main" },
            }}
            onClick={openContact}
          >
            Contact
          </Box>
        </Toolbar>
      </AppBar>
      <Modal
        open={openModal}
        onClose={closeContact}
        closeAfterTransition
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Fade in={openModal} timeout={400} mountOnEnter unmountOnExit>
          <div>
            <Contact onClose={closeContact} />
          </div>
        </Fade>
      </Modal>
      <Menu
        id="navigation-menu"
        keepMounted
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        sx={{
          "& .MuiMenu-paper": {
            mt:'5px',
            width:"200px",
            padding:1
          }
        }}
        elevation={1}
      >
        <MenuItem
          component={GatsbyLink}
          to="/"
          sx={{ "&:hover": { backgroundColor: "#FAB8B8" } }}
          onClick={handleMenuClose}
        >
          Home
        </MenuItem>
        <Divider variant="middle" />
        <MenuItem
          component={GatsbyLink}
          to="/news"
          sx={{ "&:hover": { backgroundColor: "#FBCEB6" } }}
          onClick={handleMenuClose}
        >
          News
        </MenuItem>
        <MenuItem
          component={GatsbyLink}
          to="/about"
          sx={{ "&:hover": { backgroundColor: "#FBEFB6" } }}
          onClick={handleMenuClose}
        >
          About
        </MenuItem>
        <MenuItem
          component={GatsbyLink}
          to="/work"
          sx={{ "&:hover": { backgroundColor: "#A3E4B3" } }}
          onClick={handleMenuClose}
        >
          Work
        </MenuItem>
        <Divider variant="middle" />
        <MenuItem
          sx={{ "&:hover": { backgroundColor: "#FBEFB6" } }}
          onClick={openContact}
        >
          Contact
        </MenuItem>
      </Menu>
    </div>
  );
}
