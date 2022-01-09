import React from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { HomeTheme } from "./src/themes";

export const wrapRootElement = ({ element }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={HomeTheme}>
        {element}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
