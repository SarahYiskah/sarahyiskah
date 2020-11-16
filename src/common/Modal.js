import React from 'react';
import { createUseStyles } from 'react-jss';
import clsx from 'clsx';

const useStyles = createUseStyles(theme => ({
    modal: {
        backgroundColor: 'white',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '200',
        width: '89%',
        height: '70%',
        '& > video': {
            width: '100%',
            height: '100%'
        }
    },
    backdrop: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 5
    }
}));

const Modal = ({ showModal, setShowModal, children }) => {
    const classes = useStyles();

    if (!showModal) return null;

    const closeModal = () => setShowModal(false);

    return (
        <div id="modal">
            <div className={classes.modal}>
                {children}
            </div>
            <div className={classes.backdrop} onClick={closeModal} />
        </div>
    );
};

export default Modal;