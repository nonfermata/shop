import React from 'react';
import { useSelector } from 'react-redux';
import { getAllCart, getAllTotalPrice } from '../../utils/cartUtil';
import { getCart } from '../../../redux/cartReducer';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader';
import classes from './cart.module.css';
import CartItem from './cartItem';

const Cart = () => {
    const cart = getAllCart(useSelector(getCart()));
    const totalPrice = getAllTotalPrice(cart);
    const title = totalPrice === 0 ? 'В корзине пусто :(' : 'Ваша корзина';
    return (
        <>
            <Gratis />
            <CategoryHeader title={title} />
            {totalPrice !== 0 && (
                <div className={classes.cartWrap}>
                    {cart.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className={classes.totalPrice}>
                        <div>
                            Всего к оплате:&nbsp;&nbsp;
                            <span className='fw600'>{totalPrice} ₽</span>
                        </div>
                        <button className={classes.payButton}>
                            Перейти к оплате
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;
