import React, { useEffect, useState } from 'react';
import classes from './shop.module.css';

const Card = ({ id, name, price, year, image, isAvailable }) => {
    const initialState = localStorage.getItem(id)
        ? Number(localStorage.getItem(id))
        : 0;
    const [amount, setAmount] = useState(initialState);
    const addItem = () => {
        setAmount((prevState) => prevState + 1);
    };
    const subtractItem = () => {
        if (amount !== 0) {
            setAmount((prevState) => prevState - 1);
        }
    };
    useEffect(() => {
        localStorage.setItem(id, amount.toString());
    }, [amount]);
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
                            onClick={!amount ? addItem : () => {}}
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
                                onClick={subtractItem}
                                className={classes.managerButton}
                            >
                                -
                            </div>
                            <div className={classes.amount}>{amount}</div>
                            <div
                                onClick={addItem}
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
