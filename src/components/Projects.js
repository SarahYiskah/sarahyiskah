import React, { useEffect, useState, useCallback } from 'react';
import { createUseStyles } from 'react-jss';
import { useCommonClasses, useActiveRoute } from 'hooks'
import clsx from 'clsx';
import { Modal } from 'common';
import { PlayBox } from 'assets/icons';

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        // position: 'relative'
    },
    details: {
        paddingTop: '130px',
        paddingBottom: '127px'
    }
}));

const projects = [
    {
        id: 'musico',
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
        videoURL: require('../assets/videos/Musico.mp4'),
        imageURL: require('../assets/images/musico.png')
    }, {
        id: 'game_night',
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
        videoURL: require('../assets/videos/GameNight.mp4'),
        imageURL: require('../assets/images/game-night.png')
    }, {
        id: 'trippy',
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
        videoURL: require('../assets/videos/Trippy App.mp4'),
        imageURL: require('../assets/images/trippy.png')
    }
];

const Projects = () => {
    const classes = useStyles();
    const commonClasses = useCommonClasses();

    const { activeRoute } = useActiveRoute();
    const [activeProject, setActiveProject] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const project = activeRoute.split('.')[1] || '';
        setActiveProject(project);
    }, [activeRoute]);

    const getVideoURL = useCallback(() => (
        projects.find(project => project.id === activeProject).videoURL.default
    ), [showModal]);

    const handleDisplayVideo = () => setShowModal(true);

    return (
        <div id="projects">
            <Modal setShowModal={setShowModal} showModal={showModal}>
                {
                    showModal &&
                    <video width="320" height="240" autoPlay controls>
                        <source src={getVideoURL()} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                }
            </Modal>
            {projects.map((project, index) => (
                <div
                    id={project.id}
                    key={project.id}
                    className={clsx(classes.container, 'scrollSection')}
                >
                    <div className={clsx(classes.details, activeProject !== project.id ? commonClasses.unactive : '')}>
                        <p className={commonClasses.sectionTitle}>{project.title}</p>
                        <p className={commonClasses.sectionSubheader}>
                            {project.subheader}
                        </p>
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
                    <div className={commonClasses.sectionImage} id={project.id + 'Img'}>
                        <img
                            style={{ background: project.background }}
                            src={project.imageURL}
                        />
                    </div>
                    {
                        activeProject === project.id
                            ? (
                                <div className={commonClasses.sectionActionContainer} onClick={handleDisplayVideo}>
                                    <PlayBox />
                                    <p className={commonClasses.sectionAction}>Watch Demo</p>
                                </div>
                            ) : null
                    }
                </div>
            ))}
        </div>
    );
};

export default Projects;