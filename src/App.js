import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles(theme => ({
    text: {
        color: theme.palette.primary.main
    }
}));

const App = () => {
    const classes = useStyles();

    return (
        <div className="container">
            <h1 className={classes.text}>Hello World, React!</h1>
        </div>
    );
};

export default App;