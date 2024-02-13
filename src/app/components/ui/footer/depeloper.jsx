import React from 'react';
import classes from './footer.module.css';

const Depeloper = () => {
    return (
        <div className={classes.developer}>
            <span>
                Разработка и поддержка сайта:{' '}
                <a
                    href='mailto:dima-mail@bgvmusic.ru'
                    title='Написать письмо Дмитрию'
                >
                    Дмитрий Баулин
                </a>
            </span>
        </div>
    );
};

export default Depeloper;
