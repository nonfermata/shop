import React from 'react';
import classes from './priceField.module.css';

const PriceField = ({ onChange, onKeyDown, value }) => {
    return (
        <input
            placeholder='сумма'
            className={classes.priceInputField}
            onChange={onChange}
            value={value}
            onKeyDown={onKeyDown}
        />
    );
};

export default PriceField;
