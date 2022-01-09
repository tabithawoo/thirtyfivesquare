import { createTheme } from '@mui/material/styles';
import mainTheme from './mainTheme';

const workTheme = createTheme(mainTheme, {
    palette: {
        primary: {
            light: '#A3E4B3',
            main: '#04621B',
        },
        secondary: {
            main: '#E9C00C'
        }
    },
});

export default workTheme;