import React from 'react';
import classes from './shop.module.css';
import { cd } from '../../data/data';
import Card from './card';

const Cd = () => {
    return (
        <div className={classes.cardsWrap}>
            {cd.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Cd;
