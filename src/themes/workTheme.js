import {createMuiTheme} from '@material-ui/core/styles';
import mainTheme from './mainTheme';

const workTheme = createMuiTheme(mainTheme, {
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