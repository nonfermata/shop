import React, { useState } from 'react';
import classes from './userForm.module.css';

const SelectField = ({
    name,
    value,
    onChange,
    defaultOption,
    error,
    options,
    label
}) => {
    const [isFirstRender, setIsFirstRender] = useState(true);
    const handleChange = ({ target }) => {
        if (isFirstRender) setIsFirstRender(false);
        onChange(target.value);
    };
    return (
        <>
            <select
                className={
                    classes.select + ' ' + (!value ? classes.selectDefault : '')
                }
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
            >
                <option disabled value='' className={classes.selectDefault}>
                    {defaultOption}
                </option>
                {options.map((item) => (
                    <option
                        key={item.id}
                        value={item.name}
                        className={classes.selectNorm}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
            {error && !isFirstRender && (
                <p className={classes.error}>{error}</p>
            )}
        </>
    );
};

export default SelectField;
