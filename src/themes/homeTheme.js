import { createTheme } from '@mui/material/styles';
import mainTheme from './mainTheme';

const homeTheme = createTheme(mainTheme, {
    palette: {
        primary: {
            main: '#F35C5B'
        },
        secondary: {
            main: '#E9C00C'
        }
    },
});

export default homeTheme;