import React from 'react';
import classes from './categories.module.css';
import { books } from '../../data/allItems';
import Card from '../card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';
import aboutDeliveryPaying from '../../data/aboutDeliveryPaying';
const Books = () => {
    return (
        <>
            <Gratis />
            <CategoryHeader title='Книги' info={aboutDeliveryPaying} />
            <div className={classes.cardsWrap + ' ' + classes.booksCardsWrap}>
                {books.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Books;
