import React from 'react';
import classes from './categories.module.css';
import { books } from '../../data/data';
import Card from './card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from "../common/categoryHeader";

const Books = () => {
    const title = 'Книги';
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} />
            <div className={classes.cardsWrap + ' ' + classes.booksCardsWrap}>
                {books.map((item) => (
                    <Card key={item.id} {...item} type='book' />
                ))}
            </div>
        </>
    );
};

export default Books;
