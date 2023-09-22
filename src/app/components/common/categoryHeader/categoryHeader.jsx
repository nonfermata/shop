import React from 'react';
import classes from './categoryHeader.module.css';

const CategoryHeader = ({ title, info }) => {
    const infoString = info && info.join(' ');
    return (
        <>
            <h1 className={classes.categoryTitle}>{title}</h1>
            {info && (
                <div className={classes.infoWrap}>
                    {info.map((item) => (
                        <p className={classes.infoArr} key={item}>
                            {item}
                        </p>
                    ))}
                    <p className={classes.infoString}>{infoString}</p>
                </div>
            )}
        </>
    );
};

export default CategoryHeader;
