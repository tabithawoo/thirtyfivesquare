import { createMuiTheme,responsiveFontSizes } from "@material-ui/core/styles";

let mainTheme = createMuiTheme({
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
  overrides: {
    MuiTab: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
        paddingTop: '16px',
        paddingBottom: '16px'
      },
    }
  }  
});

mainTheme = responsiveFontSizes(mainTheme);
export default mainTheme;