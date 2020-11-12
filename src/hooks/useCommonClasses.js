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
        textTrasform: 'uppercase'
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
    },
    sectionImage: props => ({
        width: '485px',
        height: '530px',
        // left: '955px',
        // top: '195px',
        background: props.background,
        [theme.breakpoints.up.lg]: {
            width: '867.81px',
            height: '530px'
        }
    })
}));

export default useCommonClasses;