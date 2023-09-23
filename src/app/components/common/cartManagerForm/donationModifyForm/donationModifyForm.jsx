import React, { useEffect, useState } from 'react';
import classes from './donationModifyForm.module.css';
import PriceField from '../priceField/priceField';
import { useDispatch, useSelector } from 'react-redux';
import { getAmountById, modifyItem } from '../../../../../redux/cartReducer';

const DonationModifyForm = ({ initialButtonText, isCart = false }) => {
    const amount = useSelector(getAmountById('gratis')) || 0;
    const dispatch = useDispatch();
    const [donation, setDonation] = useState('');
    const [buttonText, setButtonText] = useState(initialButtonText);
    const [addedButtonStyle, setAddedButtonStyle] = useState(
        classes.inactiveButton
    );
    const [error, setError] = useState('');
    const modifyCartGratis = () => {
        if (!error && donation) {
            setAddedButtonStyle(classes.successButton);
            setButtonText('Спасибо! Добавлено');
            setTimeout(() => {
                setAddedButtonStyle('');
                setButtonText('Добавить ещё');
            }, 1700);
            dispatch(modifyItem('gratis', 'add', donation));
        }
    };
    const validate = (value) => {
        if (isNaN(value) || value <= 0) {
            setError('Введите сумму больше нуля!');
            addedButtonStyle !== classes.inactiveButton &&
                setAddedButtonStyle(classes.inactiveButton);
            !isNaN(value) && setDonation(value);
        } else {
            error && setError('');
            addedButtonStyle !== '' && setAddedButtonStyle('');
            setDonation(+value);
        }
    };
    const handleChange = ({ target }) => {
        console.log(target.value);
        validate(target.value);
    };
    const handleKeyDown = ({ keyCode }) => {
        if (keyCode === 13) {
            modifyCartGratis();
        }
    };
    const order = isCart ? classes.priceFieldBack : '';
    return (
        <>
            <div className={classes.donationFormWrap}>
                <div className={classes.donationInputWrap + ' ' + order}>
                    <div className={classes.inputError}>{error}</div>
                    <PriceField
                        onChange={handleChange}
                        value={donation}
                        onKeyDown={handleKeyDown}
                    />
                    ₽
                </div>
                <button
                    className={classes.donationButton + ' ' + addedButtonStyle}
                    onClick={modifyCartGratis}
                    title={error ? '' : 'Добавить ' + donation + ' ₽'}
                >
                    {amount === 0 ? initialButtonText : buttonText}
                </button>
            </div>
        </>
    );
};

export default DonationModifyForm;
