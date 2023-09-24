import React from 'react';
import classes from './burger.module.css';
import menu from '../../../data/menu';
import { NavLink } from 'react-router-dom';
import SiteLink from '../../common/siteLink/siteLink';
import scrollToTop from "../../../utils/scrollToTop";

const BurgerNavBar = ({ addedMenuStyle }) => {
    return (
        <nav className={classes.burgerMenu + ' ' + addedMenuStyle}>
            {menu.map(({ link, name, title }) => (
                <NavLink
                    key={name}
                    to={link}
                    title={title || name}
                    onClick={scrollToTop}
                    style={
                        link === 'items/new_book'
                            ? {
                                  fontWeight: '500'
                              }
                            : null
                    }
                    className={classes.burgerLink}
                >
                    {name}
                </NavLink>
            ))}
            <SiteLink className={classes.burgerLink + ' ' + classes.siteLink} />
        </nav>
    );
};

export default BurgerNavBar;
