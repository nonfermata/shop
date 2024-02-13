import React, { useEffect, useState } from 'react';
import classes from './gratis.module.css';
import CrossIcon from '../../common/crossIcon/crossIcon';

const AboutDonation = () => {
    const [addedStyle, setAddedStyle] = useState('');
    useEffect(() => {
        setAddedStyle(classes.aboutDonationVisible);
    }, []);
    return (
        <div className={classes.aboutDonation + ' ' + addedStyle}>
            <span className='fw600 green'>СПАСИБО!</span> <br />
            <br />
            Для оплаты перейдите, пожалуйста, в корзину.
            <div className={classes.crossWrap}>
                <CrossIcon />
            </div>
        </div>
    );
};

export default AboutDonation;
