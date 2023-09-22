import React from 'react';
import classes from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import menu from '../../../data/menu';
import CartLink from '../../common/cartLink/cartLink';

const Navbar = () => {
    return (
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
                                ? classes.navbarItemActive
                                : classes.navbarItem
                        }
                    >
                        {name}
                    </NavLink>
                    |
                </div>
            ))}
            <CartLink
                className={(link) =>
                    link.isActive
                        ? classes.navbarItemActive
                        : classes.navbarItem
                }
            />
        </nav>
    );
};

export default Navbar;
