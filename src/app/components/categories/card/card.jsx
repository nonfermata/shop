import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAmountById, modifyItem } from '../../../../redux/cartReducer';
import classes from './card.module.css';
import PriceField from '../../common/priceField';
import AmountManager from '../../common/amountManager';
import ManagerButton from '../../common/managerButton';

const Card = ({
    id,
    name,
    price,
    year,
    image,
    isAvailable,
    shotDescr,
    type
}) => {
    let imageWidth;
    switch (id) {
        case 'bk1_2023':
            imageWidth = 37;
            break;
        case 'bk1_2018':
        case 'bk1_2017':
            imageWidth = 27;
            break;
        case 'epub1_2023':
        case 'epub1_2018':
        case 'epub1_2017':
        case 'epub1_2006':
            imageWidth = 23;
            break;
        case 'bk1_2006':
            imageWidth = 21;
            break;
        default:
            imageWidth = 100;
    }
    class Styles {
        constructor(cardWrap, itemInfo, forCartWrap) {
            this.cardWrap = cardWrap;
            this.itemInfo = itemInfo;
            this.forCartWrap = forCartWrap;
        }
    }
    const styles =
        type === 'book' || type === 'epub'
            ? new Styles(
                  classes.bookCardWrap,
                  classes.bookItemInfo,
                  classes.bookForCartWrap
              )
            : new Styles('', '', '');
    const isElItem = !(type === 'book' || type === 'cd');
    const { cardWrap, itemInfo, forCartWrap } = styles;
    const [error, setError] = useState('');
    const amount = useSelector(getAmountById(id)) || 0;
    const [itemButtonStyle, setItemButtonStyle] = useState(
        amount === 0 ? '' : classes.successButton
    );
    const [donation, setDonation] = useState(100);
    const [donationButtonStyle, setDonationButtonStyle] = useState('');
    const [donationButtonText, setDonationButtonText] = useState('Добавить');
    const dispatch = useDispatch();
    const modifyCartItem = (method) => {
        if (!(method === 'subtract' && amount === 0)) {
            if (method === 'subtract' && amount === 1) {
                setItemButtonStyle('');
            } else setItemButtonStyle(classes.successButton);
            dispatch(modifyItem(id, method, price));
        }
    };
    const modifyCardGratis = () => {
        if (!error) {
            setDonationButtonStyle(classes.successButton);
            setDonationButtonText('Спасибо! Добавлено');
            setTimeout(() => {
                setDonationButtonStyle('');
                setDonationButtonText('Добавить ещё');
            }, 1500);
            dispatch(modifyItem('gratis', 'add', donation));
        }
    };
    const validate = (value) => {
        if (!isNaN(value)) {
            if (value <= 0) {
                setError('Введите сумму больше нуля!');
                setDonation(value);
                setDonationButtonStyle(classes.inactiveButton);
            } else {
                setError('');
                setDonation(+value);
                setDonationButtonStyle('');
            }
        }
    };
    const handleChange = ({ target }) => {
        validate(target.value);
    };

    return (
        <div className={classes.cardWrap + ' ' + cardWrap}>
            <img style={{ width: imageWidth + '%' }} src={image} alt={name} />
            <div className={itemInfo}>
                <p className='itemName'>{name}</p>
                <p className='itemYear'>{year}</p>
                {shotDescr && (
                    <div className={classes.shotDescr}>
                        {shotDescr.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                )}
                <div className={classes.itemPrice}>{price} ₽</div>
                <div className={classes.forCartWrap + ' ' + forCartWrap}>
                    {isAvailable ? (
                        <>
                            <button
                                onClick={
                                    !amount
                                        ? () => {
                                              modifyCartItem('add');
                                          }
                                        : () => {}
                                }
                                className={
                                    classes.addButton + ' ' + itemButtonStyle
                                }
                            >
                                {amount === 0
                                    ? 'Добавить в корзину'
                                    : 'В корзине'}
                            </button>
                            {!isElItem ? (
                                <AmountManager
                                    onClick={modifyCartItem}
                                    amount={amount}
                                />
                            ) : (
                                amount > 0 && (
                                    <ManagerButton
                                        onClick={() => {
                                            modifyCartItem('subtract');
                                        }}
                                        title='Убрать'
                                    >
                                        -
                                    </ManagerButton>
                                )
                            )}
                        </>
                    ) : (
                        <div
                            className={
                                classes.addButton + ' ' + classes.inactiveButton
                            }
                        >
                            Временно нет в наличии
                        </div>
                    )}
                </div>
                {isAvailable && (
                    <div className={classes.donationWrap}>
                        <h3 className={classes.donationTitle}>
                            Поддержать безвозмездно
                        </h3>
                        <div className={classes.donationFormWrap}>
                            <div className={classes.donationInputWrap}>
                                <PriceField
                                    onChange={handleChange}
                                    value={donation}
                                />
                                ₽
                            </div>
                            <button
                                className={
                                    classes.donationButton +
                                    ' ' +
                                    donationButtonStyle
                                }
                                onClick={modifyCardGratis}
                            >
                                {donationButtonText}
                            </button>
                        </div>
                        <div className={classes.inputError}>{error}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
