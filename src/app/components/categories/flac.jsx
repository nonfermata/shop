import React from 'react';
import classes from './categories.module.css';
import { flac } from '../../data/allItems';
import Card from '../card/card';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';
import DonationCard from '../common/donationCard/donationCard';

const Flac = () => {
    const title = 'Альбомы в цифровом FLAC-формате';
    const info = [
        'Все аудиотреки в формате FLAC (lossless-качество).',
        'К аудиотрекам также прилагается вся полиграфия к диску в цифровом виде (формат PDF).',
        'Выбирая цифровую версию альбома, вы получаете уникальную ссылку для скачивания.'
    ];
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} info={info} />
            <div className={classes.cardsWrap}>
                {/*<DonationCard />*/}
                {flac.map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </>
    );
};

export default Flac;
