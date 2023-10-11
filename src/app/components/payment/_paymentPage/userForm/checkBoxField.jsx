import React from 'react';
import classes from './userForm.module.css';

const CheckBoxField = ({ name, onChange, value, children }) => {
    const handleChange = ({ target }) => {
        onChange(name, target.checked);
    };
    return (
        <div className={classes.checkboxWrap}>
            <input
                className={classes.form__checkbox}
                type='checkbox'
                checked={value}
                id={name}
                onChange={handleChange}
            />
            <label className={classes.form__checkboxLabel} htmlFor={name}>
                {children}
            </label>
        </div>
    );
};

export default CheckBoxField;
