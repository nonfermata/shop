import React from 'react';
import home from "../../../assets/svg/home";

const SiteLink = ({className}) => {
    return (
        <a
            href='//bgvmusic.ru'
            target='_blank'
            rel='noreferrer'
            className={className}
            title='Зоя Ященко и "Белая Гвардия". Официальный сайт'
        >
            {home}
            на сайт bgvmusic.ru
        </a>
    );
};

export default SiteLink;