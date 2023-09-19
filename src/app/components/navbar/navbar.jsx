import React, { useEffect, useRef, useState } from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCart, getAllTotalSum } from '../../utils/cartUtil';
import { getCart } from '../../../redux/cartReducer';
import basket from '../../assets/svg/basket';
import getDeclination from '../../utils/getDeclination';
import formatSum from "../../utils/formatSum";

const Navbar = () => {
    const prevPositions = useRef();
    const navbarItems = [
        { link: 'cd', name: 'Альбомы на CD' },
        { link: 'mp3', name: 'Альбомы MP3' },
        { link: 'flac', name: 'Альбомы FLAC' },
        { link: 'wav', name: 'Альбомы WAV' },
        { link: 'books', name: 'Книги' },
        { link: 'epub', name: 'Электронные книги EPUB' }
    ];
    const cart = getAllCart(useSelector(getCart()));
    const positions = cart.reduce(
        (acc, item) => acc + item.donations.length,
        0
    );
    const [basketInfoStyle, setBasketInfoStyle] = useState(
        positions ? '' : classes.basketInfoOutside
    );
    useEffect(() => {
        prevPositions.current = positions;
    }, []);
    useEffect(() => {
        if (positions === 0 && prevPositions.current === 1) {
            setTimeout(() => {
                setBasketInfoStyle(classes.basketInfoOutside);
            }, 1500);
        }
        if (positions === 1 && prevPositions.current === 0) {
            setBasketInfoStyle('');
        }
        prevPositions.current = positions;
    }, [positions]);
    const totalSum = getAllTotalSum(cart);
    return (
        <header className={classes.header}>
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
                            <span className={classes.positions}>
                                {positions}
                            </span>
                            {getDeclination(positions, 'positions')} на сумму
                            <div className={classes.totalSumBox}>
                                <span className='fw500'>{formatSum(totalSum)}</span> ₽
                            </div>
                        </>
                    )}
                </NavLink>
            </div>
            <nav className={classes.navbarWrap}>
                {/*<a href='//bgvmusic.ru' className={classes.navbarItem}>*/}
                {/*    Сайт*/}
                {/*</a>*/}
                {navbarItems.map(({ link, name }) => (
                    <div className={classes.navbarItemWrap} key={link}>
                        <NavLink
                            to={link}
                            className={(link) =>
                                link.isActive
                                    ? classes.navbarItem +
                                      ' ' +
                                      classes.navbarItemActive
                                    : classes.navbarItem
                            }
                        >
                            {name}
                        </NavLink>
                        |
                    </div>
                ))}
                <NavLink
                    to='cart'
                    title='Перейти в корзину'
                    className={(link) =>
                        link.isActive
                            ? classes.navbarItem +
                              ' ' +
                              classes.navbarItemActive
                            : classes.navbarItem
                    }
                >
                    <div className={classes.basketWrap}>{basket}</div>
                    Корзина
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
