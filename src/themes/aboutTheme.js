import {createMuiTheme} from '@material-ui/core/styles';
import mainTheme from './mainTheme';


const aboutTheme = createMuiTheme(mainTheme, {
    palette: {
        primary: {
            light: '#fcedca',
            main: '#E9C00C'
        },
        secondary: {
            main:  '#04621B'
        }
    },
});

export default aboutTheme;