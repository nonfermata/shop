import React from 'react';
import classes from './categories.module.css';
import { wav } from '../../data/data';
import Card from './card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader';

const Wav = () => {
    const title = 'Альбомы в цифровом WAV-формате';
    const info = [
        'Все аудиотреки в формате WAV (lossless-качество).',
        'К аудиотрекам также прилагается вся полиграфия к диску в цифровом виде (формат PDF).',
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap}>
                {wav.map((item) => (
                    <Card key={item.id} {...item} type='wav' />
                ))}
            </div>
        </>
    );
};

export default Wav;
