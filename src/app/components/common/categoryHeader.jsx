import React from 'react';
import classes from './common.module.css';

const CategoryHeader = ({ title, info = [] }) => {
    return (
        <>
            <h1 className={classes.categoryTitle}>{title}</h1>
            {info.map((item) => (
                <p key={item} className={classes.categoryInfo}>
                    {item}
                </p>
            ))}
        </>
    );
};

export default CategoryHeader;
