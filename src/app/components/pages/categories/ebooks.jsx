import React from 'react';
import classes from './categories.module.css';
import Gratis from '../../ui/gratis/gratis';
import CategoryHeader from '../../common/categoryHeader/categoryHeader';
import { ebooks } from '../../../data/allItems';
import Card from '../../ui/card/card';

const Ebooks = () => {
    const info = [
        'Выбирая цифровую версию книги, вы получаете уникальные ссылки для скачивания в разных форматах.'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title='Электронные книги' info={info} />
            <div className={classes.cardsWrap + ' ' + classes.booksCardsWrap}>
                {ebooks.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Ebooks;
