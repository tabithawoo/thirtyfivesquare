import {createMuiTheme} from '@material-ui/core/styles';
import mainTheme from './mainTheme';

const newsTheme = createMuiTheme(mainTheme, {
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