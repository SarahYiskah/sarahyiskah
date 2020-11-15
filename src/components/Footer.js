import React from 'react';
import { createUseStyles } from 'react-jss';
import { useCommonClasses } from 'hooks';
import { Linkedin, Github, Medium } from '../assets/icons';

const useStyles = createUseStyles(theme => ({
    container: {
        background: theme.palette.background.secondary,
        color: theme.palette.text.primary,
        height: '690px',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        boxSizing: 'border-box',
        display: 'grid',
        gridTemplateColumns: 'minmax(19%, auto) minmax(auto, 1555px)',
    },
    innerContainer: {
        gridColumnStart: '2',
        paddingTop: '219px',
        paddingBottom: '88px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    contact: {
        '& > p, a': {
            color: theme.palette.text.light,
        }
    },
    copyright: {
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        lineHeight: '26px'
    },
    socials: {
        '& > a': {
            marginRight: '10px'
        }
    }
}));

const Footer = () => {
    const classes = useStyles();
    const commonClasses = useCommonClasses();

    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div className={classes.contact}>
                    <p className={commonClasses.sectionDescription}>Let's chat!</p>
                    <a
                        className={commonClasses.sectionDetails}
                        href="mailto:sarahyiskah@gmail.com"
                    >
                        sarahyiskah@gmail.com
                    </a>
                </div>
                <div className={classes.contact}>
                    <div className={classes.socials}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/sarah-eichenstein/"
                        >
                            <Linkedin />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/SarahYiskah"
                        >
                            <Github />
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://medium.com/@97sarahy"
                        >
                            <Medium />
                        </a>
                    </div>
                    <p className={classes.copyright}>Sarah Yiskah &copy;</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;