import React from 'react';
import classes from './common.module.css';

const PriceField = ({ onChange, value, disabled }) => {
    return (
        <input
            className={classes.priceInputField}
            disabled={disabled}
            onChange={onChange}
            value={value}
        />
    );
};

export default PriceField;
