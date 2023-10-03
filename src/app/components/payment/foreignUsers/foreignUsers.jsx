import React from 'react';
import classes from './foreignUsers.module.css';
import CrossIcon from '../../common/crossIcon/crossIcon';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../../redux/isPopVisibleReducer';

const ForeignUsers = () => {
    const dispatch = useDispatch();
    const isMessageVisible = useSelector(getAllPopsStatus()).foreignMessage;
    const addedMessageStyle = isMessageVisible ? classes.messageVisible : '';
    return (
        <div className={classes.messageWrap}>
            <div className={classes.message}>
                <span
                    className={classes.notFromRussia}
                    onClick={() => {
                        dispatch(togglePopStatus('foreignMessage'));
                    }}
                >
                    Я не из России. Как оплатить?
                </span>
                <div
                    className={
                        classes.messageDetailed + ' ' + addedMessageStyle
                    }
                >
                    <div className={classes.crossWrap}>
                        <CrossIcon />
                    </div>
                    Если вы не из России,
                    <br />
                    мы можем принять оплату по PayPal.
                    <br />
                    Напишите нам на:{' '}
                    <a href='mailto:bgv@bgvmusic.ru'>bgv@bgvmusic.ru</a>
                    <br />
                    <span className='noHyph'>
                        Мы всё обсудим индивидуально.
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ForeignUsers;
