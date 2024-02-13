import React from 'react';
import classes from './spreads.module.css';
import CrossIcon from '../../../common/crossIcon/crossIcon';

const ImageOnly = ({ image }) => {
    return (
        <div className={classes.imageOnlyWrap}>
            <img src={image} alt='Разворот из книги' />
            <div className={classes.crossWrap}>
                <CrossIcon />
            </div>
        </div>
    );
};

export default ImageOnly;
