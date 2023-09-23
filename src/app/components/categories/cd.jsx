import React from 'react';
import classes from './categories.module.css';
import { cd } from '../../data/allItems';
import Card from '../card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';
import DonationModifyForm from '../common/cartManagerForm/donationModifyForm/donationModifyForm';
import DonationCard from '../common/donationCard/donationCard';

const Cd = () => {
    const title = 'Альбомы на CD';
    const info = [
        'Если вы выбираете материальные лоты,',
        'к цене заказа также добавляется стоимость почтовой пересылки,',
        'которая составляет от 300 до 500 руб. в зависимости от веса посылки и региона получателя.'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap}>
                <DonationCard />
                {cd.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Cd;
