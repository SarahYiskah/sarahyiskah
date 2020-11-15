import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useCommonClasses, useActiveRoute } from 'hooks'
import clsx from 'clsx';

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative'
    },
    details: {
        paddingTop: '130px',
        paddingBottom: '127px'
    }
}));

const projects = [
    {
        title: 'MUSICO',
        subheader: 'HTML  |  CSS  |  Javascript',
        description: 'An app made to combine friends playlist and play songs of shared interest.',
        details: [
            'Used Firebase for live updates',
            'Used the Spotify api to authenticate users, and play music',
            'Used custom CSS to create a clean ui and responsive design',
            'Progressive web app',
            'Hosted on Firebase'
        ],
        background: '#D0D1D8',
        videoURL: '',
        imageURL: require('../assets/images/musico.png')
    }, {
        title: 'GAME NIGHT',
        subheader: 'HTML  |  CSS  |  Javascript',
        description: 'A fun interactive live Rummikub game with your friends online.',
        details: [
            'Used Firebase to make live connections between friend',
            'Used HTML and Javascript to create ‘drag and drop’ functionality',
            'Used mostly custom css to create a clean and fun design',
            'Hosted on Heroku',
        ],
        background: '#CDD4CB',
        videoURL: '',
        imageURL: require('../assets/images/game-night.png')
    }, {
        title: 'TRIPPY',
        subheader: 'HTML  |  CSS  |  Ruby  |  Javascript',
        description: 'A great way to plan trips with your friends.',
        details: [
            'Used JWT to build custom authentication and authorization functionality',
            'Built APIs using Ruby on Rails and the MVC pattern',
            'Used FourSquare API to make real time fetch requests',
            'Hosted on Heroku'
        ],
        background: '#EDE6CF',
        videoURL: '',
        imageURL: require('../assets/images/trippy.png')
    }
];

const Projects = () => {
    const classes = useStyles();
    const commonClasses = useCommonClasses();
    const { setActiveRoute } = useActiveRoute();

    const handleProjectsMouseOver = () => setActiveRoute('projects');

    return (
        <div id="projects" onMouseOver={handleProjectsMouseOver}>
            {projects.map((project, index) => (
                <div
                    id={project.title.toLowerCase()}
                    key={project.title.toLowerCase()}
                    className={clsx(classes.container, 'scrollSection')}
                >
                    <div className={classes.details}>
                        <p className={commonClasses.sectionTitle}>{project.title}</p>
                        <p className={commonClasses.sectionSubheader}>{project.subheader}</p>
                        <br /><br />
                        <p className={commonClasses.sectionDescription}>{project.description}</p>
                        <br /><br />
                        <div className={commonClasses.sectionDetails}>
                            {project.details.map((details, index) => (
                                <p key={'details' + index}>
                                    * {details}
                                </p>
                            ))}
                        </div>
                    </div>
                    <img
                        className={commonClasses.sectionImage}
                        id={project.title.toLowerCase() + 'Img'}
                        style={{ background: project.background }}
                        src={project.imageURL}
                    />
                </div>
            ))}
        </div>
    );
};

export default Projects;