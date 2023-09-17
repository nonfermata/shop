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
    const [prefix, setPrefix] = useState('от');
    const [userPrice, setUserPrice] = useState(price);
    const amount = useSelector(getAmountById(id)) || 0;
    const [buttonStyle, setButtonStyle] = useState(
        amount === 0 ? '' : classes.successButton
    );
    const dispatch = useDispatch();
    const modifyCart = (method) => {
        if (!(method === 'subtract' && amount === 0) && !error) {
            if (method === 'subtract' && amount === 1) {
                setButtonStyle('');
            } else setButtonStyle(classes.successButton);
            dispatch(modifyItem(id, method, userPrice));
        }
    };
    const validate = (value) => {
        if (isNaN(value)) {
            setError('Некорректный ввод!');
            setUserPrice(value);
            amount === 0 && setButtonStyle(classes.inactiveButton);
        } else if (+value < price) {
            setError(`Сумма не может быть меньше ${price} руб.`);
            setUserPrice(+value);
            amount === 0 && setButtonStyle(classes.inactiveButton);
        } else {
            setError('');
            setUserPrice(+value);
            setButtonStyle(amount === 0 ? '' : classes.successButton);
        }
        if (+value !== price && prefix === 'от') {
            setPrefix('');
        }
        if (+value === price) setPrefix('от');
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
                <div className={classes.priceInputWrap}>
                    <p className={classes.prefix}>{prefix}</p>
                    <PriceField
                        onChange={handleChange}
                        value={userPrice}
                        disabled={!isAvailable}
                    />
                    <p>₽</p>
                </div>
                <div className={classes.inputError}>{error}</div>
                <div className={classes.forCartWrap + ' ' + forCartWrap}>
                    {isAvailable ? (
                        <>
                            <div
                                onClick={
                                    !amount
                                        ? () => {
                                              modifyCart('add');
                                          }
                                        : () => {}
                                }
                                className={
                                    classes.addButton + ' ' + buttonStyle
                                }
                            >
                                {amount === 0
                                    ? 'Добавить в корзину'
                                    : 'В корзине'}
                            </div>
                            {!isElItem ? (
                                <AmountManager
                                    onClick={modifyCart}
                                    amount={amount}
                                />
                            ) : (
                                amount > 0 && (
                                    <ManagerButton
                                        onClick={() => {
                                            modifyCart('subtract');
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
            </div>
        </div>
    );
};

export default Card;
