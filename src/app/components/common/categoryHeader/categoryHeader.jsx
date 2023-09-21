import React from 'react';
import classes from './categoryHeader.module.css';

const CategoryHeader = ({ title, info }) => {
    return (
        <>
            <h1 className={classes.categoryTitle}>{title}</h1>
            {info && (
                <div className={classes.infoWrap}>
                    {info.map((item) => (
                        <p key={item}>{item}</p>
                    ))}
                </div>
            )}
        </>
    );
};

export default CategoryHeader;
