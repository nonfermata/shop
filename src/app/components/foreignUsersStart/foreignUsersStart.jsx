import React, { useEffect, useState } from 'react';
import classes from './foreignUsersStart.module.css';

const ForeignUsersStart = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [addedMessageStyle, setAddedMessageStyle] = useState('');
    const handleClick = () => {
        localStorage.setItem('foreignUsers', 'ok');
        setAddedMessageStyle('');
        setTimeout(() => {
            setIsVisible(false);
        }, 1000);
    };
    useEffect(() => {
        if (!localStorage.getItem('foreignUsers')) {
            setIsVisible(true);
            setTimeout(() => {
                setAddedMessageStyle(classes.messageWrapShown);
            }, 50);
        }
    }, []);
    if (isVisible) {
        return (
            <div className={classes.messageWrap + ' ' + addedMessageStyle}>
                <div className={classes.message}>
                    В настоящее время оформление заказов на этом сайте{' '}
                    <span className='noHyph'>
                        доступно только для жителей РФ.
                    </span>
                    <br />
                    Если вы не из России, напишите нам на:{' '}
                    <a href='mailto:bgv@bgvmusic.ru'>bgv@bgvmusic.ru</a>
                    <br />
                    <span className='noHyph'>
                        Мы рассмотрим вашу заявку индивидуально.
                    </span>
                    <button className={classes.okButton} onClick={handleClick}>
                        ОК
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default ForeignUsersStart;
