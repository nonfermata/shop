import React from 'react';
import classes from './categories.module.css';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';
import { epub } from '../../data/allItems';
import Card from '../card/card';
import DonationCard from "../common/donationCard/donationCard";

const Epub = () => {
    const title = 'Электронные книги в EPUB-формате';
    const info = [
        'Выбирая цифровую версию книги, вы получаете уникальную ссылку для скачивания.'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap + ' ' + classes.booksCardsWrap}>
                <DonationCard category='books' />
                {epub.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Epub;
