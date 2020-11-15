import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { ActiveRouteProvider } from 'providers';
import { getImageHeightAndTop, isBotttomOfScreen } from 'utility'
import { Footer, Navbar, About, Projects, Blog } from 'components';


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
        const blog = document.getElementById('blog');
        if (isBotttomOfScreen(blog)) {
            scrollSections.forEach(section => {
                const sectionId = section.id;
                const imageToUpdate = document.getElementById(sectionId + 'Img');
                imageToUpdate.style.position = 'sticky';
            });
        } else {
            scrollSections.forEach(section => {
                const sectionId = section.id;
                const imageDimensions = getImageHeightAndTop(section);
                const imageToUpdate = document.getElementById(sectionId + 'Img');
                imageToUpdate.style.position = 'fixed';
                imageToUpdate.style.height = imageDimensions.height;
                imageToUpdate.style.top = imageDimensions.location;
            });
        }
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
                        <Blog />
                    </div>
                </div>
                <Footer />
            </div>
        </ActiveRouteProvider>
    );
};

export default App;