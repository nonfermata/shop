import React from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import menu from '../../../data/menu';
import CartLink from '../../common/cartLink/cartLink';
import scrollToTop from "../../../utils/scrollToTop";

const Navbar = () => {
    return (
        <nav className={classes.navbarWrap}>
            {menu.map(({ link, name, title }, index) => (
                <div className={classes.navbarItemWrap} key={link}>
                    <span style={index === 0 ? { display: 'none' } : null}>
                        |
                    </span>
                    <NavLink
                        key={name}
                        to={link}
                        title={title || name}
                        onClick={scrollToTop}
                        style={
                            link === 'items/new_book'
                                ? {
                                      fontWeight: '600'
                                  }
                                : null
                        }
                        className={(link) =>
                            link.isActive
                                ? classes.navbarItemActive
                                : classes.navbarItem
                        }
                    >
                        {name}
                    </NavLink>
                </div>
            ))}
            <span className={classes.navbarCartLink}>|</span>
            <CartLink
                className={(link) =>
                    link.isActive
                        ? classes.navbarItemActive +
                          ' ' +
                          classes.navbarCartLink
                        : classes.navbarItem + ' ' + classes.navbarCartLink
                }
            />
        </nav>
    );
};

export default Navbar;
