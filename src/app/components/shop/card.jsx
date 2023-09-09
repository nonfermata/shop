import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAmountById, modifyItem } from '../../../redux/cartReducer';
import classes from './shop.module.css';

const Card = ({ id, name, price, year, image, isAvailable }) => {
    const amount = useSelector(getAmountById(id));
    const dispatch = useDispatch();
    const modifyAmount = (method) => {
        if (!(method === 'subtract' && amount === 0)) {
            dispatch(modifyItem(id, method));
        }
    };

    return (
        <div className={classes.cardWrap}>
            <img src={image} alt={name} />
            <p className={classes.itemName}>{name}</p>
            <p className={classes.itemYear}>{year}</p>
            <p className={classes.itemPrice}>{price} ₽</p>
            <div className={classes.forCartWrap}>
                {isAvailable ? (
                    <>
                        <div
                            onClick={
                                !amount
                                    ? () => {
                                          modifyAmount('add');
                                      }
                                    : () => {}
                            }
                            className={
                                classes.offer +
                                ' ' +
                                (amount !== 0 ? classes.offerSubmited : '')
                            }
                        >
                            {amount === 0 ? 'Добавить в корзину' : 'В корзине'}
                        </div>
                        <div className={classes.amountManagerWrap}>
                            <div
                                onClick={() => {
                                    modifyAmount('subtract');
                                }}
                                className={classes.managerButton}
                            >
                                -
                            </div>
                            <div className={classes.amount}>{amount}</div>
                            <div
                                onClick={() => {
                                    modifyAmount('add');
                                }}
                                className={classes.managerButton}
                            >
                                +
                            </div>
                        </div>
                    </>
                ) : (
                    <div className={classes.offer + ' ' + classes.unavailable}>
                        Временно нет в наличии
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
