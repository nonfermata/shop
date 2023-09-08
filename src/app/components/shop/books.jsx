import React from 'react';
import classes from './shop.module.css';
import { books } from '../../data/data';
import Card from './card';

const Books = () => {
    return (
        <div className={classes.cardsWrap}>
            {books.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </div>
    );
};

export default Books;
