import React from 'react';
import classes from './itemsList.module.css'

const AboutDelivery = () => {
    return (
        <div className={classes.aboutDelivery}>
            Поскольку у вас в корзине есть материальные лоты,
            к цене заказа также добавляется стоимость почтовой
            пересылки (рассчитывается отдельно после того, как мы уточним ваш
            адрес).
        </div>
    );
};

export default AboutDelivery;
