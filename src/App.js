import React from 'react';
import { createUseStyles } from 'react-jss';
import { Footer, Navbar, About, Projects } from 'components';
import { ActiveRouteProvider } from 'providers';


const useStyles = createUseStyles(theme => ({
    text: {
        color: theme.palette.primary.main
    },
    body: {
        marginBottom: '690px',
        background: theme.palette.background.primary,
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: 'minmax(19%, auto) minmax(auto, 1555px)',
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <ActiveRouteProvider>
            <div className={classes.container}>
                <div className={classes.body}>
                    <Navbar />
                    <div>
                        <About />
                        <Projects />
                    </div>
                </div>
                <Footer />
            </div>
        </ActiveRouteProvider>
    );
};

export default App;