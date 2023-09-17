import React from 'react';
import classes from './common.module.css';

const PriceField = ({ onChange, value }) => {
    return (
        <input
            className={classes.priceInputField}
            onChange={onChange}
            value={value}
        />
    );
};

export default PriceField;
