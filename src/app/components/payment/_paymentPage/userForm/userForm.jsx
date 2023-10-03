import React, { useState, useEffect } from 'react';
import classes from './userForm.module.css';
import TextField from './textField';
import validator from '../../../../utils/validator';
import {
    getItemsSum,
    getDeliverySum,
    getTotalWeight
} from '../../../../utils/cartUtil';
import { useSelector } from 'react-redux';
import Captcha from '../captcha/captcha';
import { getCaptcha } from '../../../../../redux/captchaReducer';
import CaptchaInput from '../captcha/captchaInput';
import renew from '../../../../assets/svg/renew';
import {
    getDeliveryStringForEmail,
    getItemsListForEmail
} from '../itemsList/getItemsList';
import SelectField from './selectField';
import regions from '../../../../data/regions';
import formatSum from '../../../../utils/formatSum';

const UserForm = ({ cart }) => {
    const [btnAddedStyle, setBtnAddedStyle] = useState('');
    const isDelivery = cart.filter((item) => !item.isDigital).length !== 0;
    const itemsSumOnly = getItemsSum(cart);
    const [totalSum, setTotalSum] = useState(itemsSumOnly);
    const [deliverySum, setDeliverySum] = useState();
    const captchaString = useSelector(getCaptcha());
    const [rerender, setRerender] = useState(false);
    const initialState = {
        name: '',
        email: '',
        captcha: '',
        region: { name: '' }
    };
    const [data, setData] = useState(initialState);
    const handleRerenderCaptcha = () => {
        const addedClass = btnAddedStyle === '' ? classes.btnRotated : '';
        setBtnAddedStyle(addedClass);
        setTimeout(() => {
            setBtnAddedStyle('');
        }, 1);
        setRerender((prevState) => !prevState);
    };
    const cartString = getItemsListForEmail(cart)
        .map((item) => Object.values(item).join(' | '))
        .join('\n\n');
    const weight = formatSum(getTotalWeight(cart));
    const deliveryString = isDelivery
        ? getDeliveryStringForEmail(
              data.region.name,
              weight,
              deliverySum,
              totalSum
          )
        : '';

    useEffect(() => {
        localStorage.setItem('totalCart', JSON.stringify(cart));
    }, []);
    useEffect(() => {
        localStorage.setItem('totalSum', totalSum.toString());
    }, [data.region]);
    const [errors, setErrors] = useState({});
    const handleChangeData = (name, value) => {
        setData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleChangeRegion = (name) => {
        const region = regions.find((item) => item.name === name);
        const deliverySum = getDeliverySum(region.areaId, cart);
        setData((prevState) => ({
            ...prevState,
            region
        }));
        setTotalSum(itemsSumOnly + deliverySum);
        setDeliverySum(deliverySum);
    };
    const validatorConfig = {
        name: {
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

    const isValid =
        Object.keys(errors).length === 0 &&
        data.captcha === captchaString &&
        ((isDelivery && data.region.name) || !isDelivery);
    return (
        <div className={classes.formWrap}>
            <form
                className={classes.form}
                // action='https://meddenta-klin.ru/sending_bgv/'
                action='https://shop.bgvmusic.ru/sending/'
                method='POST'
            >
                {isDelivery && (
                    <div className={classes.selectWrap}>
                        <div className={classes.selectLabel}>
                            Выберите, пожалуйста, регион доставки{' '}
                            <span className='noHyph'>или его столицу:</span>
                        </div>
                        <SelectField
                            name='region'
                            value={data.region.name}
                            onChange={handleChangeRegion}
                            defaultOption='Выберите город или регион'
                            // error={errors.region}
                            label='Выберите, пожалуйста, регион доставки или его столицу'
                            options={regions}
                        />
                        {deliverySum && (
                            <>
                                <div className={classes.deliveryResult}>
                                    Вес: {weight} г. Стоимость доставки:{' '}
                                    <span className='fw500'>
                                        {deliverySum + ' ₽'}
                                    </span>
                                </div>
                                <div className={classes.finalSum}>
                                    Итого с доставкой:{' '}
                                    <span className='fw600'>
                                        {formatSum(totalSum) + ' ₽'}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                )}
                <div className={classes.weNeedYourData}>
                    Ваши контактные данные:
                </div>

                <textarea
                    name='items'
                    value={cartString}
                    className='hidden'
                    readOnly
                />
                <textarea
                    name='itemsSumOnly'
                    value={itemsSumOnly}
                    className='hidden'
                    readOnly
                />
                <textarea
                    name='delivery'
                    value={deliveryString}
                    className='hidden'
                    readOnly
                />
                <div className={classes.inputWrap}>
                    <TextField
                        onChange={handleChangeData}
                        error={errors.name}
                        value={data.name}
                        name='name'
                        placeholder='Ваше имя'
                    />
                </div>
                <div className={classes.inputWrap}>
                    <TextField
                        onChange={handleChangeData}
                        error={errors.email}
                        value={data.email}
                        name='email'
                        placeholder='Ваш e-mail'
                    />
                </div>
                <Captcha rerender={rerender} />
                <CaptchaInput
                    name='captcha'
                    value={data.captcha}
                    onChange={handleChangeData}
                />
                <button
                    className={
                        classes.btn + ' ' + (!isValid && classes.btnDisabled)
                    }
                    disabled={!isValid}
                >
                    Оформить заявку
                </button>
            </form>
            <button
                className={classes.renewCaptchaBtn + ' ' + btnAddedStyle}
                onClick={handleRerenderCaptcha}
                title='Обновить символы'
            >
                {renew}
            </button>
        </div>
    );
};

export default UserForm;
