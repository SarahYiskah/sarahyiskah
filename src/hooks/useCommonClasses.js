import { createUseStyles } from 'react-jss';

const useCommonClasses = createUseStyles(theme => ({
    sectionTitle: {
        fontFamily: 'PT Sans Caption',
        fontSize: '60px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '78px',
        letterSpacing: '0px',
        textAlign: 'left',
        color: theme.palette.text.primary,
        textTrasform: 'uppercase',
        maxWidth: '556px',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        }
    },
    sectionSubheader: {
        color: theme.palette.text.secondary,
        fontFamily: 'PT Sans Caption',
        fontSize: '40px',
        textTrasform: 'uppercase',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '52px',
        letterSpacing: '0px',
        textAlign: 'left',
        maxWidth: '556px',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        }
    },
    sectionDescription: {
        color: theme.palette.text.primary,
        fontFamily: 'PT Sans Caption',
        fontSize: '60px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '78px',
        letterSpacing: '0px',
        textAlign: 'left',
        maxWidth: '556px',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        }
    },
    sectionDetails: {
        color: theme.palette.text.primary,
        fontFamily: 'PT Sans Caption',
        fontSize: '40px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '52px',
        letterSpacing: '0px',
        textAlign: 'left',
        margin: 0,
        maxWidth: '556px',
        [theme.breakpoints.down.md]: {
            maxWidth: '400px'
        }
    },
    sectionImage: {
        width: '485px',
        height: '530px',
        position: 'sticky',
        top: '196px',
        paddingBottom: '140px',
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