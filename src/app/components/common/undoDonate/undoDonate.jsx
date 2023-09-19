import React from 'react';
import classes from './undoDonate.module.css';
import undo from '../../../assets/svg/undo';
import { useDispatch, useSelector } from 'react-redux';
import { modifyItem, getLastDonation } from '../../../../redux/cartReducer';

const UndoDonate = () => {
    const dispatch = useDispatch();
    const lastDonation = useSelector(getLastDonation());
    return (
        <div
            onClick={() => {
                dispatch(modifyItem('gratis', 'subtract'));
            }}
            title={'Отменить последний взнос ' + lastDonation + ' ₽'}
            className={classes.undo}
        >
            {undo}
        </div>
    );
};

export default UndoDonate;
