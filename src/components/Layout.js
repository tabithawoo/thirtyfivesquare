import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { HomeTheme } from "../themes";
import { Footer, Head, Header } from "./";
import { Box } from "@mui/material";

export function Layout(props) {
  const { children, ...metadata } = props;
  return (
    <>
      <Head {...metadata} />
      <CssBaseline />
      <ThemeProvider theme={HomeTheme}>
        <Box sx={{ position: "relative", minHeight: "100vh", pb: "60px" }}>
          <Header />
          {children}
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  );
}
