import React from 'react';
import classes from './burger.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleBurgerMenu,
    getBurgerMenu
} from '../../../redux/isBurgerMenuVisibleReducer';
import BurgerIcon from './burgerIcon';
import BurgerNavBar from './burgerNavBar';

const Burger = () => {
    const dispatch = useDispatch();
    const isBurgerMenuActive = useSelector(getBurgerMenu());
    const addedMenuStyle = isBurgerMenuActive ? '' : classes.hiddenMenu;

    return (
        <div
            className={classes.burgerWrap}
            onClick={() => {
                dispatch(toggleBurgerMenu());
            }}
        >
            <BurgerIcon isActive={isBurgerMenuActive} />
            <BurgerNavBar addedMenuStyle={addedMenuStyle} />
        </div>
    );
};

export default Burger;
