import React from 'react';
import classes from './cart.module.css';
import CrossIconCircle from '../common/crossIconCircle/crossIconCircle';

const WarningMessage = () => {
    return (
        <div className={classes.warningMessage}>
            <span className='noHyph fw500'>Обращаем ваше внимание,</span> что в
            вашей корзине наряду с другими материальными покупками есть также
            новая книга <span className='noHyph fw500'>"Поля и снеговик".</span>{' '}
            <span className='fw600 strongOrange noHyph'>
                Эта книга ещё в работе!
            </span>
            <br />
            Мы сможем прислать вам посылку{' '}
            <span className='fw600'>лишь после издания новой книги.</span> Если
            вы хотели бы получить другие диски (книги) уже сейчас, удалите новую
            книгу из корзины. И оформите её покупку отдельно.
            <CrossIconCircle />
        </div>
    );
};

export default WarningMessage;
