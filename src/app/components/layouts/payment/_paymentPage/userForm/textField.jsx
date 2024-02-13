import React, { useState } from 'react';
import classes from './userForm.module.css';

const TextField = ({ onChange, placeholder, name, value, error }) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const handleChange = ({ target }) => {
        if (isFirstRender) setIsFirstRender(false);
        onChange(name, target.value);
    };
    return (
        <>
            <input
                className={classes.input}
                type='text'
                onChange={handleChange}
                placeholder={placeholder}
                id={name}
                name={name}
                value={value}
            />
            {error && !isFirstRender && (
                <p className={classes.error}>{error}</p>
            )}
        </>
    );
};

export default TextField;
