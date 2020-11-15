import React from 'react';
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

const About = () => {
    const classes = useStyles();
    const commonClasses = useCommonClasses();
    const { setActiveRoute } = useActiveRoute();

    const handleAboutMouseOver = () => setActiveRoute('about');

    return (
        <div
            id="about"
            className={clsx(classes.container, 'scrollSection')}
            onMouseOver={handleAboutMouseOver}
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
            <img id="aboutImg" className={commonClasses.sectionImage} src={require('../assets/images/profile.png')} />
        </div>
    );
};

export default About;