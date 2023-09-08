import React from 'react';
import classes from './shop.module.css';
import { cds } from '../../data/data';
import Card from './card';

const Cd = () => {
    return (
        <div className={classes.cardsWrap}>
            {cds.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Cd;
