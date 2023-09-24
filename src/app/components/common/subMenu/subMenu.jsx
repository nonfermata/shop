import React, { useEffect, useState } from 'react';
import classes from './subMenu.module.css';
import { NavLink } from 'react-router-dom';
import scrollToTop from '../../../utils/scrollToTop';

const SubMenu = ({ menu, isActive }) => {
    const [addedStyle, setAddedStyle] = useState(classes.subMenuHidden);
    useEffect(() => {
        if (isActive) {
            setAddedStyle('');
            setTimeout(() => {
                setAddedStyle(classes.subMenuVisible);
            }, 50);
        } else {
            setAddedStyle('');
            setTimeout(() => {
                setAddedStyle(classes.subMenuHidden);
            }, 301);
        }
    }, [isActive]);
    return (
        <div className={classes.sumMenuWrap + ' ' + addedStyle}>
            {menu.map(({ link, name }) => (
                <NavLink
                    key={name}
                    to={link}
                    className={classes.subMenuLink}
                    onClick={scrollToTop}
                >
                    {name}
                </NavLink>
            ))}
        </div>
    );
};

export default SubMenu;
