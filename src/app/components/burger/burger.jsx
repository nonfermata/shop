import React from 'react';
import classes from './burger.module.css';
import menu from '../../data/menu';
import { NavLink } from 'react-router-dom';
import basket from '../../assets/svg/basket';
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleBurgerMenu,
    resetBurgerMenu,
    getBurgerMenu
} from '../../../redux/isBurgerMenuVisibleReducer';

const Burger = () => {
    const dispatch = useDispatch();
    const isBurgerMenuActive = useSelector(getBurgerMenu());
    const addedMenuStyle = isBurgerMenuActive ? '' : classes.hiddenMenu;
    const handleMenuClick = (e) => {
        e.stopPropagation();
        dispatch(resetBurgerMenu());
    };
    return (
        <div
            className={classes.burgerWrap}
            onClick={() => {
                dispatch(toggleBurgerMenu());
            }}
        >
            {isBurgerMenuActive ? (
                <>
                    <div className={classes.inclinedLineOne}></div>
                    <div className={classes.inclinedLineTwo}></div>
                </>
            ) : (
                <>
                    <div className={classes.burgerLine}></div>
                    <div className={classes.burgerLine}></div>
                    <div className={classes.burgerLine}></div>
                </>
            )}
            <nav className={classes.burgerMenu + ' ' + addedMenuStyle}>
                {menu.map(({ link, name, title }) => (
                    <NavLink
                        key={name}
                        onClick={handleMenuClick}
                        to={link}
                        title={title || name}
                        style={
                            link === 'items/new_book'
                                ? {
                                      fontWeight: '500',
                                      color: 'var(--strong-orange)'
                                  }
                                : null
                        }
                        className={(link) =>
                            link.isActive
                                ? classes.burgerLink +
                                  ' ' +
                                  classes.burgerLinkActive
                                : classes.burgerLink
                        }
                    >
                        {name}
                    </NavLink>
                ))}
                <div>
                    <NavLink
                        to='cart'
                        title='Перейти в корзину'
                        className={(link) =>
                            link.isActive
                                ? classes.burgerLink +
                                  ' ' +
                                  classes.burgerLinkActive
                                : classes.burgerLink
                        }
                    >
                        <div className={classes.basketWrap}>{basket}</div>
                        Корзина
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Burger;
