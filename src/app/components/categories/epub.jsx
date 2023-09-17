import React from 'react';
import classes from './categories.module.css';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader';
import { epub } from '../../data/data';
import Card from './card/card';

const Epub = () => {
    const title = 'Электронные книги в EPUB-формате';
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} />
            <div className={classes.cardsWrap + ' ' + classes.booksCardsWrap}>
                {epub.map((item) => (
                    <Card key={item.id} {...item} type='epub' />
                ))}
            </div>
        </>
    );
};

export default Epub;
