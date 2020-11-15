import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { Footer, Navbar, About, Projects } from 'components';
import { ActiveRouteProvider } from 'providers';
import { getImageHeightAndTop } from 'utility'


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

    const handleScroll = () => {
        const scrollSections = Array.from(document.getElementsByClassName('scrollSection'));
        scrollSections.forEach(section => {
            const sectionId = section.id;
            const imageDimensions = getImageHeightAndTop(section);
            const imageToUpdate = document.getElementById(sectionId + 'Img');
            imageToUpdate.style.height = imageDimensions.height;
            imageToUpdate.style.top = imageDimensions.location;
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

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