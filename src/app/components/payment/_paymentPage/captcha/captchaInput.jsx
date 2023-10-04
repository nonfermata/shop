import React from 'react';
import classes from './captcha.module.css';

const CaptchaInput = ({
    onChange,

    name,
    value
}) => {
    const handleChange = ({ target }) => {
        onChange(name, target.value);
    };
    return (
        <>
            <div className={classes.captchaTitle}>Введите эти символы</div>
            <input
                className={classes.inputCaptcha}
                type='text'
                onChange={handleChange}
                id={name}
                name={name}
                value={value}
            />
        </>
    );
};

export default CaptchaInput;
