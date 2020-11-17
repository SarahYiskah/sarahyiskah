import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { getContainerDimensions, isBotttomOfScreen, isTopOfScreen } from 'utility';
import { useActiveRoute } from 'hooks';
import { Footer, Navbar, About, Projects, Blog } from 'components';


const useStyles = createUseStyles(theme => ({
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
    const { activeRoute, setActiveRoute } = useActiveRoute();

    const handleScroll = () => {
        const scrollSections = Array.from(document.getElementsByClassName('scrollSection'));
        const reversedSections = [...scrollSections];
        for (let section of reversedSections.reverse()) {
            if (isTopOfScreen(section)) {
                setActiveRoute(section.id);
                break;
            }
        };
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
                const containerDimensions = getContainerDimensions(section);
                const imageToUpdate = document.getElementById(sectionId + 'Img');
                imageToUpdate.style.position = 'fixed';
                imageToUpdate.style.height = containerDimensions.imgHeight;
                imageToUpdate.style.top = containerDimensions.imgTop;
                const actionToUpdate = document.getElementById(sectionId + 'Action');
                if (actionToUpdate) {
                    actionToUpdate.style.opacity = containerDimensions.actionOpacity;
                }
            });
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
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
    );
};

export default App;