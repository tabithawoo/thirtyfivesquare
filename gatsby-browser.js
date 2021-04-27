import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {HomeTheme} from './src/themes';


export const wrapRootElement = ({ element }) =>
	<ThemeProvider theme={HomeTheme}>
        <CssBaseline/>
		{element}
	</ThemeProvider>;