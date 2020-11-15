import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import { ThemeProvider } from 'react-jss';
import { ActiveRouteProvider } from 'providers';
import theme from './theme';

if (document) {
    document.body.style.padding = 0;
    document.body.style.margin = 0;
    document.getElementsByTagName('html')[0].style['scroll-behavior'] = 'smooth';
    ReactDOM.render((
        <ActiveRouteProvider>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ActiveRouteProvider>
    ), document.getElementById("root"));
}