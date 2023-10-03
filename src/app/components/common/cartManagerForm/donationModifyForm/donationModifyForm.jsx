import React, { useEffect, useState } from 'react';
import classes from './donationModifyForm.module.css';
import PriceField from '../priceField/priceField';
import { useDispatch, useSelector } from 'react-redux';
import { getAmountById, modifyItem } from '../../../../../redux/cartReducer';
import ModifyButton from '../modifyButton/modifyButton';

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
                setButtonText(initialButtonText);
            }, 1700);
            dispatch(modifyItem('gratis', 'add', donation));
        }
    };
    const validate = (value) => {
        if (!isNaN(value)) {
            if (value <= 0) {
                setError('Введите сумму больше нуля!');
                addedButtonStyle !== classes.inactiveButton &&
                    setAddedButtonStyle(classes.inactiveButton);
                setDonation(value);
            } else {
                error && setError('');
                addedButtonStyle !== '' && setAddedButtonStyle('');
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
    return (
        <>
            <div className={classes.donationFormWrap}>
                {isCart && 'Добавить ещё'}
                <div className={classes.donationInputWrap}>
                    <div className={classes.inputError}>{error}</div>
                    <PriceField
                        onChange={handleChange}
                        value={donation}
                        onKeyDown={handleKeyDown}
                    />
                    ₽
                </div>
                {isCart ? (
                    <ModifyButton
                        onClick={modifyCartGratis}
                        disabled={error || !donation}
                        title={
                            error || !donation
                                ? ''
                                : 'Добавить ' + donation + ' ₽'
                        }
                    >
                        +
                    </ModifyButton>
                ) : (
                    <button
                        className={
                            classes.donationButton + ' ' + addedButtonStyle
                        }
                        onClick={modifyCartGratis}
                        title={error ? '' : 'Добавить ' + donation + ' ₽'}
                    >
                        {amount === 0 ? initialButtonText : buttonText}
                    </button>
                )}
            </div>
        </>
    );
};

export default DonationModifyForm;
