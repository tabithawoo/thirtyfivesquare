import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import {HomeTheme} from './src/themes';

export const wrapRootElement = ({element}) => {
    return (
    <ThemeProvider theme={HomeTheme}>{element}</ThemeProvider>
    );
}