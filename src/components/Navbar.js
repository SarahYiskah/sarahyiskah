import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useActiveRoute } from 'hooks';
import { DownArrow } from 'assets/icons';
import clsx from 'clsx';

const useStyles = createUseStyles(theme => ({
    container: {
        position: 'relative'
    },
    routes: {
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        paddingRight: '50px',
        transition: 'top 0.5s',
        paddingBottom: '185px',
        width: '80px',
        marginLeft: 'auto',
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
    },
    downArrow: {
        width: '80px',
        marginLeft: 'auto',
        display: 'flex',
        justifyContent: 'center',
        position: 'sticky',
        paddingRight: '50px',
        top: '650px',
        cursor: 'pointer',
        paddingBottom: '140px'
    },
    unactive: {
        opacity: 0.3,
        pointerEvents: 'none'
    }
}));

const Navbar = () => {
    const classes = useStyles();
    const { activeRoute: _activeRoute, getNextRoute } = useActiveRoute();
    const [top, setTop] = useState('142px');

    const activeRoute = _activeRoute.split('.')[0];
    const nextRoute = getNextRoute() ? getNextRoute() : '';

    useEffect(() => {
        if (activeRoute === 'about') setTop('142px');
        if (activeRoute === 'projects') setTop('89px');
        if (activeRoute === 'blog') setTop('33px');
    }, [_activeRoute]);

    return (
        <div className={classes.container}>
            <div
                className={classes.routes}
                style={{ top: [top] }}
            >
                <a
                    href="#about"
                    className={activeRoute === "about" ? classes.navLinkActive : classes.navLink}
                >
                    About
                </a>
                <a
                    href="#projects"
                    className={activeRoute === "projects" ? classes.navLinkActive : classes.navLink}
                >
                    Projects
                </a>

                <a
                    href="#blog"
                    className={activeRoute === "blog" ? classes.navLinkActive : classes.navLink}
                >
                    Blog
                </a>
            </div>
            <a
                className={clsx(classes.downArrow, !nextRoute && classes.unactive)}
                href={'#' + nextRoute}
            >
                <DownArrow />
            </a>
        </div>
    );
};

export default Navbar;