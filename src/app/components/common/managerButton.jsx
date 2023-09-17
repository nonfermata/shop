import React from 'react';
import classes from './common.module.css';

const ManagerButton = ({ onClick, children, title, disabled }) => {
    const addedStyle = disabled ? classes.managerButtonDisabled : ''
    return (
        <button onClick={onClick} className={classes.managerButton + ' ' + addedStyle} title={title}>
            {children}
        </button>
    );
};

export default ManagerButton;
