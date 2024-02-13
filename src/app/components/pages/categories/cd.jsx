import React from 'react';
import classes from './categories.module.css';
import { cd } from '../../../data/allItems';
import Card from '../../ui/card/card';
import Gratis from '../../ui/gratis/gratis';
import CategoryHeader from '../../common/categoryHeader/categoryHeader';
import aboutDeliveryPaying from '../../../data/aboutDeliveryPaying';

const Cd = () => {
    return (
        <>
            <Gratis />
            <CategoryHeader title='Альбомы на CD' info={aboutDeliveryPaying} />
            <div className={classes.cardsWrap}>
                {cd.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Cd;
