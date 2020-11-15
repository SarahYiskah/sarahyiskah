import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { getImageHeightAndTop, isBotttomOfScreen, isTopOfScreen } from 'utility';
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
            const sectionId = (section.id !== 'about' && section.id !== 'blog') ? 'projects.' + section.id : section.id;
            if (isTopOfScreen(section)) {
                if (section.id !== 'about' && section.id !== 'blog') {
                    setActiveRoute('projects.' + section.id);
                } else {
                    setActiveRoute(sectionId);
                }
                break;
            }
        };
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