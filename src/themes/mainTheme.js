import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let mainTheme = createTheme({
  palette: {
    background: {
      default: '#f7f9f5',
    },
  },
  typography: {
      fontFamily: [
          'Montserrat',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontWeight: 600,
        letterSpacing: '0.0em'
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 700,
      },
      subtitle1: {
        fontWeight: 600,
        fontSize: '0.95em',
      },
      body1: {
        lineHeight: '1.3em'
      }
    },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          marginTop: '10px',
          marginBottom: '10px',
          borderColor: '#444444',
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          paddingTop: '16px',
          paddingBottom: '16px'
        },
      }
    }
  }  
});

mainTheme = responsiveFontSizes(mainTheme);
export default mainTheme;