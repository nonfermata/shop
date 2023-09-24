import React from 'react';
import classes from './burger.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    toggleMenuStatus,
    getAllMenusStatus
} from '../../../../redux/isMenuVisibleReducer';
import BurgerIcon from './burgerIcon';
import BurgerNavBar from './burgerNavBar';

const Burger = () => {
    const dispatch = useDispatch();
    const isBurgerMenuActive = useSelector(getAllMenusStatus()).burger;
    const addedMenuStyle = isBurgerMenuActive ? '' : classes.hiddenMenu;

    return (
        <div
            className={classes.burgerWrap}
            onClick={() => {
                dispatch(toggleMenuStatus('burger'));
            }}
        >
            <BurgerIcon isActive={isBurgerMenuActive} />
            <BurgerNavBar addedMenuStyle={addedMenuStyle} />
        </div>
    );
};

export default Burger;
