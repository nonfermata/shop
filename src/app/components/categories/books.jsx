import React from 'react';
import classes from './categories.module.css';
import { books } from '../../data/allItems';
import Card from '../card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';

const Books = () => {
    const title = 'Книги';
    const info = [
        'Если вы выбираете материальные лоты,',
        'к цене заказа также добавляется стоимость почтовой пересылки,',
        'которая составляет от 300 до 500 руб. в зависимости от веса посылки и региона получателя.'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap + ' ' + classes.booksCardsWrap}>
                {books.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Books;
