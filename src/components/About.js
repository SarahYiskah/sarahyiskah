import React from 'react';
import { createUseStyles } from 'react-jss';
import { useCommonClasses, useActiveRoute } from 'hooks'
import clsx from 'clsx';
import { DownloadBox } from 'assets/icons';

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

const About = () => {
    const classes = useStyles();
    const commonClasses = useCommonClasses();

    const { activeRoute } = useActiveRoute();

    const imageURL = window.innerWidth > 1800
        ? require('../assets/images/profile-wide.png')
        : require('../assets/images/profile.png');

    return (
        <div
            id="about"
            className={clsx(classes.container, 'scrollSection')}
        >
            <p className={clsx(commonClasses.sectionDescription, classes.details)}>
                Hey there!
                <br />
                <br />
                I am a full stack web developer with a passion for creating positive user experiences. I have practice in HTML5, CSS, Ruby, Ruby on Rails, Python, Swift, JavaScript (ES6), AngularJS, React & Redux. I enjoy problem solving & have an aptitude for learning new languages quickly & efficiently.
                <br />
                <br />
                &lt;3
                <br />
                Sarah Yiskah Eichenstein
            </p>
            <div id="aboutImg" className={commonClasses.sectionImage}>
                <img src={imageURL} />
            </div>
            {
                activeRoute === 'about'
                    ? (
                        <a
                            href={require("../assets/documents/resume.pdf")}
                            className={commonClasses.sectionActionContainer}
                            download="Sarah Eichenstein Resume"
                        >
                            <DownloadBox />
                            <p className={commonClasses.sectionAction}>My Resume</p>
                        </a>
                    ) : null
            }
        </div>
    );
};

export default About;