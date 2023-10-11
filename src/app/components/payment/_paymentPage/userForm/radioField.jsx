import React from 'react';
import classes from './userForm.module.css';

const RadioField = ({ options, name, value, onChange, mainLabel }) => {
    const handleChange = ({ target }) => {
        onChange(name, target.value);
    };
    return (
        <div className={classes.radioWrap}>
            <div className={classes.radioMainLabel}>{mainLabel}</div>
            {options.map((option) => (
                <div key={option.name + '_' + option.value}>
                    <input
                        className={classes.radioInput}
                        type='radio'
                        name={name}
                        checked={option.value === value}
                        id={option.name + '_' + option.value}
                        value={option.value}
                        onChange={handleChange}
                    />
                    <label
                        className={classes.radioLabel}
                        htmlFor={option.name + '_' + option.value}
                    >
                        {option.name}
                    </label>
                </div>
            ))}
        </div>
    );
};

export default RadioField;
