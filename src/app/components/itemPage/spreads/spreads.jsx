import React from 'react';
import classes from './spreads.module.css';
import spreads from '../../../data/spreads';

const Spreads = ({ name, onClick }) => {
    const itemSpreads = spreads.find((item) => item.name === name).spreads;
    return (
        <div className={classes.spreadsWrap}>
            {itemSpreads.map(({ id, image }) => (
                <div
                    key={id}
                    className={classes.spreadWrap}
                    onClick={() => {
                        onClick(image);
                    }}
                >
                    <img src={image} alt='Разворот книги' />
                </div>
            ))}
        </div>
    );
};

export default Spreads;
