import React from 'react';
import classes from './burger.module.css';

const BurgerIcon = ({ isActive }) => {
    return (
        <>
            {isActive ? (
                <>
                    <div className={classes.inclinedLineOne}></div>
                    <div className={classes.inclinedLineTwo}></div>
                </>
            ) : (
                <>
                    <div className={classes.burgerLine}></div>
                    <div className={classes.burgerLine}></div>
                    <div className={classes.burgerLine}></div>
                </>
            )}
        </>
    );
};

export default BurgerIcon;
