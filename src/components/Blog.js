import React from 'react';
import { createUseStyles } from 'react-jss';
import { useCommonClasses, useActiveRoute } from 'hooks'
import clsx from 'clsx';
import { RightArrow } from 'assets/icons';

const useStyles = createUseStyles(theme => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        position: 'relative',
        paddingTop: '130px',
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    details: {
        marginBottom: '127px',
        textDecoration: 'none !important',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        textDecoration: 'underline',
        lineHeight: '60px'
    },
    subheader: {
        textTransform: 'none',
    },
    arrow: {
        marginLeft: '20px'
    },
    image: {
        paddingBottom: '127px'
    }
}));

const blogs = [
    {
        title: 'Animation.css',
        subheader: '2 min read',
        link: 'https://medium.com/@97sarahy/animation-css-e86cad475a3',
    }, {
        title: 'CSS Transitions',
        subheader: '3 min read',
        link: 'https://medium.com/@97sarahy/css-transitions-fa72c24c6174',
    }, {
        title: 'Javascript Fibbonacci Sequence',
        subheader: '2 min read',
        link: 'https://medium.com/@97sarahy/javascript-fibbonacci-sequence-44696901e22d',
    }, {
        title: 'More Articles',
        link: 'https://medium.com/@97sarahy',
    }
];


const Blog = () => {
    const classes = useStyles();
    const commonClasses = useCommonClasses();

    const { activeRoute } = useActiveRoute();


    return (
        <div
            id="blog"
            className={clsx(classes.container, 'scrollSection')}
        >
            <div className={clsx(classes.links, activeRoute !== 'blog' ? commonClasses.unactive : '')}>
                {blogs.map((blog, index) => (
                    <a
                        id={blog.title.toLowerCase().replace(/ /g, "_")}
                        key={blog.title.toLowerCase().replace(/ /g, "_")}
                        className={classes.details}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={blog.link}
                    >
                        <p className={commonClasses.sectionTitle}>
                            {blog.title}
                            {!blog.subheader
                                ? <span className={classes.arrow}><RightArrow /></span>
                                : null
                            }
                        </p>
                        {!!blog.subheader
                            ? (
                                <p className={clsx(commonClasses.sectionSubheader, classes.subheader)}>
                                    {blog.subheader}
                                    <span className={classes.arrow}><RightArrow /></span>
                                </p>
                            ) : null
                        }
                    </a>
                ))}
            </div>
            <div className={classes.image}>
                <img id="blogImg" className={commonClasses.sectionImage} src={require('../assets/images/blog.png')} />
            </div>
        </div>
    );
};

export default Blog;