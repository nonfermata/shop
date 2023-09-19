import React from 'react';
import classes from './managerButton.module.css';

const ManagerButton = ({ onClick, children, title, disabled = false }) => {
    const addedStyle = disabled ? classes.managerButtonDisabled : '';
    return (
        <button
            onClick={onClick}
            className={classes.managerButton + ' ' + addedStyle}
            title={title}
        >
            {children}
        </button>
    );
};

export default ManagerButton;
