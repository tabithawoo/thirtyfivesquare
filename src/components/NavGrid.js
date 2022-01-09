import React from "react";
import { Box, Grid, Link, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link as GatsbyLink } from "gatsby";
import MainLogo from "../images/logos/logo-main.png";
import HomeImage from "../images/HomeDuck.png";
import AboutImage from "../images/AboutCactus.png";
import WorkImage from "../images/WorkCups.png";
import NewsImage from "../images/NewsLight.png";

const navImageStyle = { height: "64vh", position: "relative", top: "1vh" },
  headerStyle = { position: "relative", bottom: "60%" },
  navBlockStyle = { overflow: "hidden", height: "65vh" };

export function NavGrid() {
  return (
    <Grid container component={Paper} elevation={4}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundImage: "linear-gradient(#F35C5B, #f78282)",
          height: "65vh",
          position: "relative",
        }}
      >
        <Box
          component="img"
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: {xs: 0, md: "initial" },
            right: { xs: 0, md: 0.5 },
            objectFit: "scale-down",
            width: { xs: "95vw", md: "auto" },
            maxWidth: { xs: "390px", md: "460px" },
            height: { md: "64vh" },
            maxHeight: { xs: "64vh", md: "initial" },
            margin: { xs: "auto", md: "initial" },
          }}
          src={MainLogo}
          alt="The Thirty Five Square logo is the business name inside a watercolour square"
        />
        <motion.div
          initial={{ x: "-120px", y: "0" }}
          animate={{ x: "0", y: [-50, 0, -50, 0, -50, 0] }}
          transition={{
            ease: "linear",
            duration: 2,
          }}
        >
          <Box
            component="img"
            sx={{
              position: "absolute",
              objectFit: "scale-down",
              height: { xs: "60vh", lg: "50vh" },
              left: { xs: "5px", md: "15px", lg: "50px" },
              top: { xs: "calc(3vh + 30px)", lg: "calc(10vh + 30px)" },
              maxWidth: { xs: "90vw", md: "initial" },
            }}
            src={HomeImage}
            alt=""
          />
        </motion.div>
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          ...navBlockStyle,
          backgroundImage: "linear-gradient(#E9590C,#f78143)",
        }}
      >
        <Box component="img" sx={{ ...navImageStyle }} src={NewsImage} alt="" />
        <Typography sx={{ ...headerStyle }} variant="h3" align="center">
          <Link
            component={GatsbyLink}
            to="/news"
            underline="hover"
            sx={{ color: "#FFFFFF" }}
          >
            News
          </Link>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          ...navBlockStyle,
          backgroundImage: "linear-gradient(#E9C00C,#f6db67)",
        }}
      >
        <Box
          component="img"
          sx={{ ...navImageStyle }}
          src={AboutImage}
          alt=""
        />
        <Typography sx={{ ...headerStyle }} variant="h3" align="center">
          <Link
            component={GatsbyLink}
            to="/about"
            color="primary"
            underline="hover"
          >
            About
          </Link>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          ...navBlockStyle,
          backgroundImage: "linear-gradient(#04621B,#1b9c3b)",
        }}
      >
        <Box component="img" sx={{ ...navImageStyle }} src={WorkImage} alt="" />
        <Typography sx={{ ...headerStyle }} variant="h3" align="center">
          <Link
            component={GatsbyLink}
            to="/work"
            color="inherit"
            underline="hover"
          >
            Work
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}
