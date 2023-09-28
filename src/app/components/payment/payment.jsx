import React from 'react';
import classes from './payment.module.css';
import UserForm from './userForm/userForm';
import PaymentList from "./paymentList/paymentList";

const Payment = () => {
    return (
        <div className={classes.paymentWrap}>
            <PaymentList/>
            <UserForm />
        </div>
    );
};

export default Payment;
