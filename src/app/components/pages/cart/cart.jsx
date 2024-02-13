import React from 'react';
import {
    useSelector
    // , useDispatch
} from 'react-redux';
import { getAllCart, getItemsSum } from '../../../utils/cartUtil';
import { getCart } from '../../../../redux/cartReducer';
import Gratis from '../../ui/gratis/gratis';
import CategoryHeader from '../../common/categoryHeader/categoryHeader';
import classes from './cart.module.css';
import CartItem from './cartItem';
import formatSum from '../../../utils/formatSum';
import { Link } from 'react-router-dom';
import scrollToTop from '../../../utils/scrollToTop';
import WarningPopWindow from './warningPopWindow';
import {
    getAllPopsStatus
    // , togglePopStatus
} from '../../../../redux/isPopVisibleReducer';
import withInnerWindow from '../../ui/hoc/withInnerWindow';

const Cart = () => {
    // const dispatch = useDispatch();
    const isDarkWindow = useSelector(getAllPopsStatus()).darkWindow;
    const HOCWarning = withInnerWindow(WarningPopWindow);
    const cart = getAllCart(useSelector(getCart()));
    const itemsSum = getItemsSum(cart);
    const title = itemsSum === 0 ? 'Ваша корзина пуста :(' : 'У вас в корзине:';
    // useEffect(() => {
    //     if (
    //         cart.filter((item) => !item.isDigital).length > 1 &&
    //         cart.find((item) => item.id === 'new_book')
    //     ) {
    //         dispatch(togglePopStatus('darkWindow'));
    //     }
    // }, []);
    return (
        <>
            {isDarkWindow && <HOCWarning />}
            <Gratis />
            <CategoryHeader title={title} />
            {itemsSum !== 0 && (
                <>
                    <div className={classes.cartWrap}>
                        {cart.map((item) => (
                            <CartItem key={item.id} {...item} />
                        ))}
                    </div>
                    <div className={classes.itemsSumWrap}>
                        <div className={classes.itemsSum}>
                            <div>
                                Всего на сумму:&nbsp;&nbsp;
                                <span className='fw500'>
                                    {formatSum(itemsSum)} ₽
                                </span>
                            </div>
                            <button
                                className={classes.confirmButton}
                                onClick={scrollToTop}
                            >
                                <Link to='../../confirmation'>
                                    Перейти к оформлению
                                </Link>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Cart;
