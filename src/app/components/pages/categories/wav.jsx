import React from 'react';
import classes from './categories.module.css';
import { wav } from '../../../data/allItems';
import Card from '../../ui/card/card';
import Gratis from '../../ui/gratis/gratis';
import CategoryHeader from '../../common/categoryHeader/categoryHeader';

const Wav = () => {
    const info = [
        'Все аудиотреки в формате WAV (lossless-качество).',
        'К аудиотрекам также прилагается вся полиграфия к диску в цифровом виде (формат PDF).',
        'Выбирая цифровую версию альбома, вы получаете уникальную ссылку для скачивания.'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader
                title='Альбомы в цифровом WAV-формате'
                info={info}
            />
            <div className={classes.cardsWrap}>
                {wav.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Wav;
