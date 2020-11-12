import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    navLink: {
        fontFamily: 'PT Sans Caption',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '26px',
        textAlign: 'right',
        color: theme.palette.text.tertiary
    },
    navLinkActive: {
        fontFamily: 'PT Sans Caption',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '26px',
        textAlign: 'right',
        color: theme.palette.text.primary
    }
}));

const About = () => {
    const classes = useStyles();

    return (
        <div id="about" className={classes.container}>
            <h1 className={classes.text}>
                About
            </h1>
        </div>
    );
};

export default About;