import React from 'react';
import classes from './paymentPage.module.css';
import UserForm from './userForm/userForm';
import ListBefore from './itemsList/listBefore';
import { useSelector } from 'react-redux';
import { getAllCart } from '../../../utils/cartUtil';
import { getCart } from '../../../../redux/cartReducer';

const Confirmation = () => {
    const cart = getAllCart(useSelector(getCart()));
    return (
        cart.length !== 0 && (
            <div className={classes.paymentWrap}>
                <ListBefore cart={cart} />
                <UserForm cart={cart} />
            </div>
        )
    );
};

export default Confirmation;
