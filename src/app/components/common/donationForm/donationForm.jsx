import React, { useState } from 'react';
import classes from './donationForm.module.css';
import PriceField from '../priceField/priceField';
import { useDispatch } from 'react-redux';
import { modifyItem } from '../../../../redux/cartReducer';

const DonationForm = ({ initialButtonText, isCart = false }) => {
    const dispatch = useDispatch();
    const [donation, setDonation] = useState(100);
    const [buttonText, setButtonText] = useState(initialButtonText);
    const [addedButtonStyle, setAddedButtonStyle] = useState('');
    const [error, setError] = useState('');
    const modifyCartGratis = () => {
        if (!error) {
            setAddedButtonStyle(classes.successButton);
            setButtonText('Спасибо! Добавлено');
            setTimeout(() => {
                setAddedButtonStyle('');
                setButtonText('Добавить ещё');
            }, 1500);
            dispatch(modifyItem('gratis', 'add', donation));
        }
    };
    const validate = (value) => {
        if (!isNaN(value)) {
            if (value <= 0) {
                setError('Введите сумму больше нуля!');
                setAddedButtonStyle(classes.inactiveButton);
                setDonation(value);
            } else {
                setError('');
                setAddedButtonStyle('');
                setDonation(+value);
            }
        }
    };
    const handleChange = ({ target }) => {
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
                    {buttonText}
                </button>
            </div>
        </>
    );
};

export default DonationForm;
