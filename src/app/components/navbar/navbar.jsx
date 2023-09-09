import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCart, getTotalPrice } from '../../utils/cartUtil';
import { getCartIds } from '../../../redux/cartReducer';

const Navbar = () => {
    const navbarItems = [
        { link: 'cd', name: 'Альбомы на CD' },
        { link: 'mp3', name: 'Альбомы MP3' },
        { link: 'flac', name: 'Альбомы FLAC' },
        { link: 'books', name: 'Книги' },
        { link: 'ebooks', name: 'Книги в электронном виде' }
    ];
    const cart = getCart(useSelector(getCartIds()));
    const totalPrice = getTotalPrice(cart);
    return (
        <nav className={classes.navbarWrap}>
            {/*<a href='//bgvmusic.ru' className={classes.navbarItem}>*/}
            {/*    Сайт*/}
            {/*</a>*/}
            {navbarItems.map(({ link, name }) => (
                <div className={classes.navbarItemWrap} key={link}>
                    <Link to={link} className={classes.navbarItem}>
                        {name}
                    </Link>
                    |
                </div>
            ))}
            <Link to='cart' className={classes.navbarItem} title='Перейти в корзину'>
                Корзина
                {totalPrice !== 0 && (
                    <div className={classes.totalPrice}>
                        Выбрано товаров на <span className='fw500'>{totalPrice}</span> руб.
                    </div>
                )}
            </Link>
        </nav>
    );
};

export default Navbar;
