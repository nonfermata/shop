import React, { useEffect, useRef, useState } from 'react';
import classes from './headerCartBlock.module.css';
import { NavLink } from 'react-router-dom';
import getDeclination from '../../../utils/getDeclination';
import formatSum from '../../../utils/formatSum';
import { getAllCart, getAllTotalSum } from '../../../utils/cartUtil';
import { useSelector } from 'react-redux';
import { getCart } from '../../../../redux/cartReducer';

const HeaderCartBlock = () => {
    const prevPositions = useRef();
    const cart = getAllCart(useSelector(getCart()));
    const positions = cart.reduce(
        (acc, item) => acc + item.donations.length,
        0
    );
    const [basketInfoStyle, setBasketInfoStyle] = useState(
        positions ? '' : classes.basketInfoMovedUp
    );
    useEffect(() => {
        prevPositions.current = positions;
    }, []);
    useEffect(() => {
        if (positions === 0 && prevPositions.current === 1) {
            setTimeout(() => {
                setBasketInfoStyle(classes.basketInfoMovedUp);
            }, 1500);
        }
        if (positions === 1 && prevPositions.current === 0) {
            setBasketInfoStyle('');
        }
        prevPositions.current = positions;
    }, [positions]);
    const totalSum = getAllTotalSum(cart);
    return (
        <div className={classes.basketInfoWrap}>
            <NavLink
                to='cart'
                title='Перейти в корзину'
                className={classes.basketInfo + ' ' + basketInfoStyle}
            >
                {totalSum === 0 ? (
                    'Ваша корзина пуста'
                ) : (
                    <>
                        В корзине
                        <span className={classes.positions}>{positions}</span>
                        {getDeclination(positions, 'positions')} на сумму
                        <div className={classes.totalSumBox}>
                            <span className='fw500'>{formatSum(totalSum)}</span>{' '}
                            ₽
                        </div>
                    </>
                )}
            </NavLink>
        </div>
    );
};

export default HeaderCartBlock;
