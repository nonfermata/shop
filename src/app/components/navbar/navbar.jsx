import React, { useEffect, useRef, useState } from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCart, getAllTotalSum } from '../../utils/cartUtil';
import { getCart } from '../../../redux/cartReducer';
import basket from '../../assets/svg/basket';
import getDeclination from '../../utils/getDeclination';
import formatSum from '../../utils/formatSum';
import Burger from '../burger/burger';
import menu from '../../data/menu';

const Navbar = () => {
    const prevPositions = useRef();
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
            <Burger />
            <a
                href='//bgvmusic.ru'
                target='_blank'
                rel='noreferrer'
                className={classes.mainSiteLink}
                title='Зоя Ященко и "Белая Гвардия". Официальный сайт'
            >
                перейти на bgvmusic.ru
            </a>
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
                                <span className='fw500'>
                                    {formatSum(totalSum)}
                                </span>{' '}
                                ₽
                            </div>
                        </>
                    )}
                </NavLink>
            </div>
            <nav className={classes.navbarWrap}>
                {menu.map(({ link, name, title }) => (
                    <div className={classes.navbarItemWrap} key={link}>
                        <NavLink
                            key={name}
                            to={link}
                            title={title || name}
                            style={
                                link === 'items/new_book'
                                    ? {
                                          fontWeight: '600',
                                          color: 'var(--strong-orange)'
                                      }
                                    : null
                            }
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
