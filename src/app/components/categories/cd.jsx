import React from 'react';
import classes from './categories.module.css';
import { cd } from '../../data/data';
import Card from './card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';

const Cd = () => {
    const title = 'Альбомы на CD';
    const info = [
        'Все аудиотреки в формате audio-CD (стандартный компакт-диск).',
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap}>
                {cd.map((item) => (
                    <Card key={item.id} {...item} type='cd' />
                ))}
            </div>
        </>
    );
};

export default Cd;
