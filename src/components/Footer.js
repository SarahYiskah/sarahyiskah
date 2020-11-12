import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    container: {
        background: theme.palette.background.secondary,
        color: theme.palette.text.primary,
        height: '690px',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxSizing: 'border-box'
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <h1 className={classes.text}>
                Footer
            </h1>
        </div>
    );
};

export default Footer;