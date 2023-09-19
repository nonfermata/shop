import React from 'react';
import classes from './categories.module.css';
import { mp3 } from '../../data/data';
import Card from './card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';

const Mp3 = () => {
    const title = 'Альбомы в цифровом MP3-формате'
    const info = [
        'Все аудиотреки в формате MP3 (битрейт 320 Kbps, 44100 Hz).',
        'К аудиотрекам также прилагается вся полиграфия к диску в цифровом виде (формат PDF).',
        'Выбирая цифровую версию альбома, вы получаете уникальную ссылку для скачивания.'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap}>
                {mp3.map((item) => (
                    <Card key={item.id} {...item} type='mp3' />
                ))}
            </div>
        </>
    );
};

export default Mp3;
