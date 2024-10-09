import React from 'react';
import classes from './support.module.css';
import CategoryHeader from '../../common/categoryHeader/categoryHeader';
import PayModes from '../../common/payModes/payModes';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className={classes.supportWrap}>
            <CategoryHeader title='Поддержка' />
            <div className={classes.supportProlog}>
                <p>
                    Подддержать нас безвозмездно вы можете любым из указанных
                    ниже способов. У нас временно нет концертов по объективным
                    причинам. <span className='noHyph'>Мы сейчас</span> живем
                    благодаря вашей поддержке.
                </p>
                <p>
                    Сейчас ваши донаты идут{' '}
                    <span className='fw600'>на издание новой книги.</span>{' '}
                    <Link className='link noHyph' to='items/rim'>
                        Подробней о книге »
                    </Link>
                </p>
            </div>
            <PayModes />
        </div>
    );
};

export default Support;
