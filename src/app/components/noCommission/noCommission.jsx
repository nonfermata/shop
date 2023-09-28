import React from 'react';
import classes from './noCommission.module.css';
import CrossIcon from '../common/crossIcon/crossIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../redux/isPopVisibleReducer';

const NoCommission = () => {
    const dispatch = useDispatch();
    const isMessageVisible = useSelector(getAllPopsStatus()).noCommission;
    const addedMessageStyle = isMessageVisible ? classes.messageVisible : '';
    return (
        <div className={classes.message}>
            <span
                className={classes.notFromRussia}
                onClick={() => {
                    dispatch(togglePopStatus('noCommission'));
                }}
            >
                Как оплатить без комиссии?
            </span>
            <div className={classes.messageDetailed + ' ' + addedMessageStyle}>
                <div className={classes.crossWrap}>
                    <CrossIcon />
                </div>
                Самое простое – это напрямую сделать перевод на карту Сбера:{' '}
                <span className='noHyph fw600'>5469 3800 5674 8576</span>{' '}
                <span className='noHyph'>(получатель Зоя Николаевна Я.)</span>
                <br />
                Запомните (а лучше запишите) содержимое Вашей корзины и сообщите
                нам в письме на:{' '}
                <a href='mailto:bgv@bgvmusic.ru'>bgv@bgvmusic.ru</a>
                <br />К письму прикрепите, пожалуйста, чек об оплате.
                <br />
                <span className='noHyph'></span>
            </div>
        </div>
    );
};

export default NoCommission;
