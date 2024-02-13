import React from 'react';
import classes from './captcha.module.css';

const CaptchaInput = ({ onChange, error, name, value, isCorrectCaptcha }) => {
    const addedStyle = isCorrectCaptcha ? classes.inputCaptchaSuccess : '';
    const handleChange = ({ target }) => {
        onChange(name, target.value);
    };
    return (
        <div className={classes.inputCaptchaWrap}>
            <div className={classes.captchaTitle}>Введите эти символы</div>
            <input
                className={classes.inputCaptcha + ' ' + addedStyle}
                type='text'
                onChange={handleChange}
                id={name}
                name={name}
                value={value}
            />
            {error && <p className={classes.errorCaptcha}>{error}</p>}
        </div>
    );
};

export default CaptchaInput;
