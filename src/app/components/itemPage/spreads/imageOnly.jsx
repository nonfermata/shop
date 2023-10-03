import React from 'react';
import classes from './spreads.module.css';
import CrossIconCircle from '../../common/crossIconCircle/crossIconCircle';

const ImageOnly = ({ image }) => {
    return (
        <div className={classes.imageOnlyWrap}>
            <img src={image} alt='Разворот из книги' />
            <CrossIconCircle />
        </div>
    );
};

export default ImageOnly;
