import React from 'react';
import classes from './navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navbarItems = [
        { link: 'cd', name: 'Альбомы на CD' },
        { link: 'mp3', name: 'Альбомы MP3' },
        { link: 'flac', name: 'Альбомы FLAC' },
        { link: 'books', name: 'Книги' },
        { link: 'ebooks', name: 'Книги в электронном виде' }
    ];
    return (
        <nav className={classes.navbarWrap}>
            {/*<a href='//bgvmusic.ru' className={classes.navbarItem}>*/}
            {/*    Сайт*/}
            {/*</a>*/}
            {navbarItems.map(({ link, name }) => (
                <>
                    <Link key={link} to={link} className={classes.navbarItem}>
                        {name}
                    </Link>
                    |
                </>
            ))}
        </nav>
    );
};

export default Navbar;
