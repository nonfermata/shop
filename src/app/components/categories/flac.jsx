import React from 'react';
import classes from './categories.module.css';
import { flac } from '../../data/data';
import Card from './card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader';

const Flac = () => {
    const title = 'Альбомы в цифровом FLAC-формате';
    const info = [
        'Все аудиотреки в формате FLAC (lossless-качество).',
        'К аудиотрекам также прилагается вся полиграфия к диску в цифровом виде (формат PDF).'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap}>
                {flac.map((item) => (
                    <Card key={item.id} {...item} type='flac' />
                ))}
            </div>
        </>
    );
};

export default Flac;
