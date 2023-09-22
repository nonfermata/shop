import React from 'react';
import classes from './burger.module.css';
import menu from '../../data/menu';
import { NavLink } from 'react-router-dom';
import SiteLink from '../common/siteLink/siteLink';
import { resetBurgerMenu } from '../../../redux/isBurgerMenuVisibleReducer';
import { useDispatch } from 'react-redux';

const BurgerNavBar = ({ addedMenuStyle }) => {
    const dispatch = useDispatch();
    const handleMenuClick = (e) => {
        e.stopPropagation();
        dispatch(resetBurgerMenu());
    };
    return (
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
                            ? classes.burgerLinkActive
                            : classes.burgerLink
                    }
                >
                    {name}
                </NavLink>
            ))}
            <SiteLink className={classes.burgerLink + ' ' + classes.siteLink} />
        </nav>
    );
};

export default BurgerNavBar;
