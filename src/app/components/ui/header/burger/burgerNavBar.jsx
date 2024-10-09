/* eslint-disable indent */
import React from 'react';
import classes from './burger.module.css';
import menu from '../../../../data/menu';
import { NavLink } from 'react-router-dom';
import scrollToTop from '../../../../utils/scrollToTop';
import SiteLink from '../../../common/siteLink/siteLink';
// import SupportLink from '../supportLink/supportLink';

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
                        link === 'items/polya'
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
            {/*<SupportLink isMobile={true} />*/}
            <SiteLink className={classes.burgerLink + ' ' + classes.siteLink} />
        </nav>
    );
};

export default BurgerNavBar;
