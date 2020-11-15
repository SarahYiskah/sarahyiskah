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
        objectFit: 'cover',
        marginLeft: 'auto',
        [theme.breakpoints.down.md]: {
            width: '385px',
            height: '420.7px'
        },
        [theme.breakpoints.up.lg]: {
            width: '867.81px',
            height: '530px'
        }
    }
}));

export default useCommonClasses;