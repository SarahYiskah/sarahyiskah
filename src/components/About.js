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
                {/* I am a full stack web developer with a passion for creating positive user experiences. I have practice in HTML5, CSS, JavaScript, AngularJS, React, Ruby, Ruby on Rails and Python. I enjoy problem solving & have an aptitude for learning new languages quickly & efficiently.
                <br />
                <br /> */}
                I'm a software engineer who’s all about building great user experiences. I'm pretty handy with CSS and JavaScript and have a thing for React. I love tackling tricky problems and coming up with creative solutions. A good design is my jam, too—I think projects should look good and work well!
                <br />
                <br />
                &lt;3
                <br />
                Sarah Yiskah Eichenstein
            </p>
            <div id="aboutImg" className={commonClasses.sectionImage}>
                <img src={imageURL} />
            </div>
            <a
                href={require("../assets/documents/resume.pdf")}
                className={commonClasses.sectionActionContainer}
                download="Sarah Eichenstein Resume"
                id="aboutAction"
            >
                <DownloadBox />
                <p className={commonClasses.sectionAction}>My Resume</p>
            </a>
        </div>
    );
};

export default About;