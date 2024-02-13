/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import classes from './userForm.module.css';
import TextField from './textField';
import validator from '../../../../../utils/validator';
import {
    getItemsSum,
    getDeliverySum,
    getTotalWeight
} from '../../../../../utils/cartUtil';
import { useSelector } from 'react-redux';
import Captcha from '../captcha/captcha';
import { getCaptcha } from '../../../../../../redux/captchaReducer';
import CaptchaInput from '../captcha/captchaInput';
import renew from '../../../../../assets/svg/renew';
import {
    getDeliveryStringForEmail,
    getItemsListForEmail
} from '../itemsList/getItemsList';
import SelectField from './selectField';
import regions from '../../../../../data/regions';
import formatSum from '../../../../../utils/formatSum';
// import RadioField from './radioField';

const UserForm = ({ cart }) => {
    const [btnAddedStyle, setBtnAddedStyle] = useState('');
    const [captchaError, setCaptchaError] = useState('');
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
        region: { name: '' },
        agreement: ''
    };
    const [data, setData] = useState(initialState);
    const isCorrectCaptcha = data.captcha === captchaString;
    const handleRerenderCaptcha = () => {
        const addedClass = btnAddedStyle === '' ? classes.btnRotated : '';
        setBtnAddedStyle(addedClass);
        setTimeout(() => {
            setBtnAddedStyle('');
        }, 1);
        setRerender((prevState) => !prevState);
    };
    const mailItems = getItemsListForEmail(cart)
        .map((item) => Object.values(item).join(' | '))
        .join('\n\n');
    const weight = formatSum(getTotalWeight(cart));
    const mailDelivery = isDelivery
        ? getDeliveryStringForEmail(
              data.region.name,
              weight,
              deliverySum,
              totalSum
          )
        : '';
    useEffect(() => {
        localStorage.setItem('totalSum', totalSum.toString());
        if (isDelivery || (!isDelivery && isPublicName)) {
            localStorage.setItem('region', data.region.name);
        } else if (localStorage.getItem('region')) {
            localStorage.removeItem('region', data.region.name);
        }
    }, [data.region, data.agreement]);
    useEffect(() => {
        localStorage.setItem('totalCart', JSON.stringify(cart));
        data.agreement = 'noPublic';
    }, []);
    useEffect(() => {
        localStorage.setItem('name', data.name);
    }, [data.name]);
    useEffect(() => {
        localStorage.setItem('email', data.email);
    }, [data.email]);
    useEffect(() => {
        if (data.captcha.length >= 5 && !isCorrectCaptcha && !captchaError) {
            setCaptchaError('Вы неверно ввели символы!');
        } else if (
            (data.captcha.length < 5 && captchaError) ||
            (data.captcha.length === 5 && isCorrectCaptcha)
        ) {
            setCaptchaError('');
        }
    }, [data.captcha]);
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
        if (isDelivery) {
            setTotalSum(itemsSumOnly + deliverySum);
            setDeliverySum(deliverySum);
            localStorage.setItem('deliverySum', deliverySum);
        }
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

    const isDonationOnly = cart.length === 1 && cart[0].id === 'gratis';
    const mailSubj = isDonationOnly
        ? 'Поддержка на сайте shop.bgvmusic.ru'
        : 'Заказ на сайте shop.bgvmusic.ru';
    const mailTitle = isDonationOnly
        ? 'Поддержка на сайте shop.bgvmusic.ru'
        : 'На сайте shop.bgvmusic.ru был оформлен новый заказ.';
    const mailOrder = isDonationOnly ? '' : 'Состав заказа:\n';
    const mailItemsSum = isDonationOnly
        ? ''
        : `Всего на сумму: ${itemsSumOnly} ₽`;
    const mailAgreement =
        data.agreement === 'fullName'
            ? 'Откуда : ' + data.region.name + '\n'
            : data.agreement === 'nameOnly'
            ? 'Откуда: ' + data.region.name + '\n'
            : '';
    const hiddenFields = Object.entries({
        mailSubj,
        mailTitle,
        mailOrder,
        mailItemsSum,
        mailAgreement,
        mailDelivery
    });

    const isPublicName =
        data.agreement === 'fullName' || data.agreement === 'nameOnly';

    const isValid =
        Object.keys(errors).length === 0 &&
        isCorrectCaptcha &&
        data.agreement &&
        ((isDelivery && data.region.name) ||
            (!isDelivery &&
                ((data.region.name && isPublicName) || !isPublicName)));
    return (
        <div className={classes.formWrap}>
            <form
                className={classes.form}
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
                                <div className={classes.totalSum}>
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

                {hiddenFields.map((item) => (
                    <textarea
                        key={item[0]}
                        name={item[0]}
                        value={item[1]}
                        className='hidden'
                        readOnly
                    />
                ))}

                <textarea
                    name='mailItems'
                    value={mailItems}
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
                {/*<RadioField*/}
                {/*    mainLabel='По ссылке «Нас поддержали» можно увидеть список*/}
                {/*поддержавших наш проект. Ваше имя мы тоже внесём в этот*/}
                {/*список, если Вы не возражаете.'*/}
                {/*    options={[*/}
                {/*        {*/}
                {/*            name: 'Я не возражаю',*/}
                {/*            value: 'fullName'*/}
                {/*        },*/}
                {/*        {*/}
                {/*            name: 'Я не возражаю, но пусть в списке будет только имя (без фамилии)',*/}
                {/*            value: 'nameOnly'*/}
                {/*        },*/}
                {/*        {*/}
                {/*            name: 'Я не хочу, чтоб мое имя было в списке',*/}
                {/*            value: 'noPublic'*/}
                {/*        }*/}
                {/*    ]}*/}
                {/*    onChange={handleChangeData}*/}
                {/*    name='agreement'*/}
                {/*    value={data.agreement}*/}
                {/*/>*/}

                {isPublicName && !isDelivery && (
                    <div className={classes.selectWrap}>
                        <div className={classes.selectLabel}>
                            Укажите, пожалуйста, откуда вы:
                        </div>
                        <SelectField
                            name='region'
                            value={data.region.name}
                            onChange={handleChangeRegion}
                            defaultOption='Выберите город или регион'
                            label='Выберите город или регион'
                            options={regions}
                        />
                    </div>
                )}
                <Captcha rerender={rerender} />
                <CaptchaInput
                    name='captcha'
                    value={data.captcha}
                    onChange={handleChangeData}
                    error={captchaError}
                    isCorrectCaptcha={isCorrectCaptcha}
                />
                <button
                    className={
                        classes.btn + ' ' + (!isValid && classes.btnDisabled)
                    }
                    disabled={!isValid}
                >
                    Подтвердить данные
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
