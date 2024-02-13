import React from 'react';
import classes from './support.module.css';
import CategoryHeader from '../../common/categoryHeader/categoryHeader';
import PayModes from '../../common/payModes/payModes';

const Support = () => {
    return (
        <div className={classes.supportWrap}>
            <CategoryHeader title='Поддержка' />
            <div className={classes.supportProlog}>
                Подддержать нас безвозмездно вы можете любым из указанных ниже
                способов. У нас временно нет концертов по объективным причинам.{' '}
                <span className='noHyph'>Мы сейчас</span> живем благодаря вашей
                поддержке.
            </div>
            <PayModes />
        </div>
    );
};

export default Support;
