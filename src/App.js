import React from 'react';
import { createUseStyles } from 'react-jss';
import { Footer, Navbar, About } from 'components';

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
        <div className={classes.container}>
            <div className={classes.body}>
                <Navbar />
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default App;