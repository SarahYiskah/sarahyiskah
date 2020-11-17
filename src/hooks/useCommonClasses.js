import { createUseStyles } from 'react-jss';

const useCommonClasses = createUseStyles(theme => ({
    sectionTitle: {
        fontFamily: 'PT Sans Caption',
        fontSize: '50px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '68px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: theme.palette.text.primary,
        textTrasform: 'uppercase',
        maxWidth: '556px',
        margin: '0',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        }
    },
    sectionSubheader: {
        color: theme.palette.text.secondary,
        fontFamily: 'PT Sans Caption',
        fontSize: '32px',
        textTransform: 'uppercase',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '42px',
        letterSpacing: '0px',
        textAlign: 'left',
        maxWidth: '556px',
        margin: '0',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        }
    },
    sectionDescription: {
        color: theme.palette.text.primary,
        fontFamily: 'PT Sans Caption',
        fontSize: '50px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '68px',
        letterSpacing: '0px',
        textAlign: 'left',
        maxWidth: '556px',
        margin: '0',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        }
    },
    sectionDetails: {
        color: theme.palette.text.primary,
        fontFamily: 'PT Sans Caption',
        fontSize: '32px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '42px',
        letterSpacing: '0px',
        textAlign: 'left',
        margin: 0,
        maxWidth: '556px',
        margin: '0',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        },
        '& > p:last-child': {
            marginBottom: 0
        }
    },
    sectionImage: {
        width: '485px',
        height: '530px',
        position: 'fixed',
        right: '0',
        top: '140px',
        marginLeft: 'auto',
        display: 'flex',
        objectFit: 'cover',
        '& > img': {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        [theme.breakpoints.down.md]: {
            width: '385px',
            height: '420.7px'
        },
        [theme.breakpoints.up.lg]: {
            width: '867.81px',
            height: '530px'
        }
    },
    sectionActionContainer: {
        display: 'flex',
        alignItems: 'flex-end',
        position: 'absolute',
        cursor: 'pointer',
        position: 'fixed',
        top: `${(140 + 420.7) - 41}px`,
        right: `${485 - 268}px`,
        [theme.breakpoints.down.md]: {
            top: `${(140 + 420.7) - 41}px`,
            right: `${385 - 268}px`
        },
        [theme.breakpoints.up.lg]: {
            top: `${(140 + 530) - 41}px`,
            right: `${867.81 - 268}px`
        },
        zIndex: 2,
        textDecoration: 'none',
        width: '230px'
    },
    sectionAction: {
        margin: '0',
        marginLeft: '20px',
        fontFamily: 'PT Sans Caption',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '26px',
        color: theme.palette.text.primary,
        textDecoration: 'none'
    },
    unactive: {
        opacity: 0.3
    }
}));

export default useCommonClasses;