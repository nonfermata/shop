import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCart, getAllTotalSum } from '../../utils/cartUtil';
import { getCart } from '../../../redux/cartReducer';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';
import classes from './cart.module.css';
import CartItem from './cartItem';
import formatSum from '../../utils/formatSum';
import ForeignUsersCart from '../foreignUsersCart/foreignUsersCart';

const Cart = () => {
    const cart = getAllCart(useSelector(getCart()));
    const totalSum = getAllTotalSum(cart);
    const title = totalSum === 0 ? 'Ваша корзина пуста :(' : 'Ваша корзина';
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} />
            {totalSum !== 0 && (
                <>
                    <div className={classes.cartWrap}>
                        {cart.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                    <div className={classes.totalSum}>
                        <div>
                            Всего к оплате:&nbsp;&nbsp;
                            <span className='fw600'>
                                {formatSum(totalSum)} ₽
                            </span>
                        </div>
                        <button className={classes.payButton}>
                            Перейти к оплате
                        </button>
                    </div>
                </>
            )}
            <ForeignUsersCart />
        </>
    );
};

export default Cart;
