import React, { useEffect } from 'react';
import ListAfter from './itemsList/listAfter';
import classes from './paymentPage.module.css';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../../../../redux/cartReducer';
import Youmoney from '../youmoney/youmoney';
import YoumoneyBlock from '../youmoney/youmoneyBlock';

const FinalPayment = () => {
    const dispatch = useDispatch();
    const sum = localStorage.getItem('totalSum');
    useEffect(() => {
        dispatch(emptyCart());
    }, []);
    return (
        Number(sum) !== 0 && (
            <>
                <div className={classes.paymentWrap}>
                    <ListAfter />
                </div>
                <Youmoney sum={sum} />
                <YoumoneyBlock />
            </>
        )
    );
};

export default FinalPayment;
