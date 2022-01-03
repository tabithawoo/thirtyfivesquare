import {createTheme} from '@material-ui/core/styles';
import mainTheme from './mainTheme';

const homeTheme = createTheme(mainTheme,{
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