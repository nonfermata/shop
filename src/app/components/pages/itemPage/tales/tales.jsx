import React from 'react';
import polyaTales from '../../../../data/polyaTales';
import classes from './tales.module.css';
import { Link } from 'react-router-dom';
import scrollToTop from '../../../../utils/scrollToTop';

const Tales = () => {
    return (
        <div className={classes.talesWrap}>
            {polyaTales.map(({ id, name }) => (
                <Link
                    to={id}
                    key={id}
                    className={classes.taleTitle}
                    onClick={scrollToTop}
                >
                    {name}
                </Link>
            ))}
        </div>
    );
};

export default Tales;
