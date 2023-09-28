import React, { useState, useEffect } from 'react';
import classes from './userForm.module.css';
import TextField from './textField';
import validator from '../../../utils/validator';
import Youmoney from '../../youmoney/youmoney';
import BlockYouMoney from '../../blockYouMoney/blockYouMoney';
import { getAllCart, getAllTotalSum } from '../../../utils/cartUtil';
import { useSelector } from 'react-redux';
import { getCart } from '../../../../redux/cartReducer';

const UserForm = () => {
    const cart = getAllCart(useSelector(getCart()));
    const initialState = {
        userName: '',
        email: ''
    };
    const [isDataSubmited, setIsDataSubmited] = useState(false);
    const [data, setData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const handleChangeData = (name, value) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const validatorConfig = {
        userName: {
            isRequired: {
                message: 'Имя обязательно для заполнения'
            }
        },
        email: {
            isRequired: {
                message: 'E-mail обязателен для заполнения'
            },
            isEmail: {
                message: 'Некорректный e-mail'
            }
        }
    };
    useEffect(() => {
        validate();
    }, [data]);
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validate()) return;
        console.log(data);
        setIsDataSubmited(true);
    };
    const isValid = Object.keys(errors).length === 0;
    return (
        <>
            {!isDataSubmited ? (
                <form onSubmit={handleSubmit} className={classes.form}>
                    <div className={classes.inputWrap}>
                        <TextField
                            onChange={handleChangeData}
                            error={errors.userName}
                            value={data.userName}
                            name='userName'
                            placeholder='Введите свое имя'
                        />
                    </div>
                    <div className={classes.inputWrap}>
                        <TextField
                            onChange={handleChangeData}
                            error={errors.email}
                            value={data.email}
                            name='email'
                            placeholder='Введите свой e-mail'
                        />
                    </div>
                    <button
                        className={
                            classes.nextStepBtn +
                            ' ' +
                            (!isValid && classes.btnDisabled)
                        }
                    >
                        К следующему шагу
                    </button>
                </form>
            ) : (
                <>
                    <div className={classes.submittedDataWrap}>
                        <div className={classes.submittedItem}>
                            Ваше имя:{' '}
                            <span className='fw600'>{data.userName}</span>
                        </div>
                        <div className={classes.submittedItem}>
                            Ваш e-mail:{' '}
                            <span className='fw600'>{data.email}</span>
                        </div>
                    </div>
                    <Youmoney sum={getAllTotalSum(cart)} />
                    <BlockYouMoney />
                </>
            )}
        </>
    );
};

export default UserForm;
