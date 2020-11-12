import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useActiveRoute } from 'hooks';

const useStyles = createUseStyles(theme => ({
    container: {
        position: 'relative'
    },
    routes: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        right: '30px',
        transition: 'top 0.5s'
    },
    navLink: {
        fontFamily: 'PT Sans Caption',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '26px',
        textAlign: 'right',
        textDecoration: 'none',
        textTransform: 'lowercase',
        marginBottom: '27px',
        color: theme.palette.text.tertiary
    },
    navLinkActive: {
        fontFamily: 'PT Sans Caption',
        fontStyle: 'normal',
        fontSize: '20px',
        lineHeight: '26px',
        textAlign: 'right',
        textDecoration: 'none',
        textTransform: 'lowercase',
        marginBottom: '27px',
        color: theme.palette.text.primary
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const [activeRoute, setActiveRoute] = useActiveRoute();
    const [top, setTop] = useState('142px');

    const handleAboutClick = () => setActiveRoute('about');
    const handleProjectsClick = () => setActiveRoute('projects');
    const handleBlogClick = () => setActiveRoute('blog');

    useEffect(() => {
        if (activeRoute === 'about') setTop('142px');
        if (activeRoute === 'projects') setTop('89px');
        if (activeRoute === 'blog') setTop('33px');
    }, [activeRoute]);

    return (
        <div className={classes.container}>
            <div
                className={classes.routes}
                style={{
                    top: [top]
                }}
            >
                <a
                    href="#about"
                    className={activeRoute === "about" ? classes.navLinkActive : classes.navLink}
                    onClick={handleAboutClick}
                >
                    About
                </a>
                <a
                    href="#projects"
                    className={activeRoute === "projects" ? classes.navLinkActive : classes.navLink}
                    onClick={handleProjectsClick}
                >
                    Projects
                </a>

                <a
                    href="#blog"
                    className={activeRoute === "blog" ? classes.navLinkActive : classes.navLink}
                    onClick={handleBlogClick}
                >
                    Blog
                </a>
            </div>
        </div>
    );
};

export default Navbar;