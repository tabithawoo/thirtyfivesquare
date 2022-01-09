import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  ThemeProvider,
  StyledEngineProvider,
  Typography,
} from "@mui/material";
import { MiniNavGrid } from "./";
import { motion } from "framer-motion";

export function Page(props) {
  const { children, sectionTheme, title, headerImage } = props;

  return (
    <div>
      <MiniNavGrid />
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={sectionTheme}>
          <Container maxWidth="lg" disableGutters>
            <Grid container>
              <Grid
                container
                item
                xs={12}
                sx={{ justifyContent: "space-between", alignItems: "flex-end" }}
              >
                <Grid
                  item
                  component={motion.div}
                  initial={{ opacity: 0, x: "-200px" }}
                  animate={{ opacity: 1, x: "0" }}
                  exit={{ opacity: 0 }}
                  transition={{
                    ease: "linear",
                    duration: 0.5,
                  }}
                >
                  <Typography variant="h1" color="primary" sx={{ pl: 4 }}>
                    {title}
                  </Typography>
                </Grid>
                <Grid
                  item
                  component={motion.div}
                  initial={{ opacity: 0, x: "200px" }}
                  animate={{ opacity: 1, x: "0" }}
                  exit={{ opacity: 0 }}
                  transition={{
                    ease: "linear",
                    duration: 0.5,
                  }}
                >
                  <Box
                    component="img"
                    src={headerImage}
                    alt="Vase"
                    sx={{ height: { xs: "150px", md: "200px" } }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Box borderTop={2} borderColor="primary.main">
                  <Paper
                    elevation={4}
                    square
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                    }}
                  >
                    {children}
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </ThemeProvider>
      </StyledEngineProvider>
    </div>
  );
}
