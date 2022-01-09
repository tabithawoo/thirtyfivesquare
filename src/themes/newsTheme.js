import { createTheme } from '@mui/material/styles';
import mainTheme from './mainTheme';

const newsTheme = createTheme(mainTheme, {
    palette: {
        primary: {
            light: '#FBCEB6',
            main: '#E9590C',
        },
        secondary: {
            main: '#E9C00C'
        }
    },
});

export default newsTheme;