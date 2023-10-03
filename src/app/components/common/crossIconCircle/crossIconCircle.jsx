import React from 'react';
import classes from './crossIconCircle.module.css'
import CrossIcon from "../crossIcon/crossIcon";

const CrossIconCircle = () => {
    return (
        <div className={classes.crossWrapCircle}>
            <div className={classes.crossWrap}>
                <CrossIcon />
            </div>
        </div>
    );
};

export default CrossIconCircle;