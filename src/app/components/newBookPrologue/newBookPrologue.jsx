import React from 'react';
import classes from './newBookPrologue.module.css';

const NewBookPrologue = () => {
    return (
        <div className={classes.newBookPrologueWrap}>
            <p>
                <span className='fw600'>Дорогие друзья!</span>
            </p>
            <p>
                Мы готовим к выходу новую детскую книгу.{' '}
                <span className='orange fw600 noHyph'>Открываем сбор!</span>
            </p>
            <p>Весной этого года благодаря вашей поддержке мы выпустили </p>
            <p>
                новый альбом <span className='noHyph'>и Книгу</span> сказок для
                детей <span className='noHyph'>и взрослых.</span>{' '}
                <span className='orange fw500 noHyph'>
                    Спасибо вам за доверие!
                </span>
            </p>
            <p></p>
            <p>
                <span className='noHyph'>А теперь</span>{' '}
                <span className='noHyph'>в наших</span> планах книга для самых
                маленьких.
            </p>
            <p></p>
            <p>Она уже написана, художник работает над иллюстрациями.</p>
            <p>
                <span className='fw500'>
                    <span className='noHyph'>И мы</span> верим, что вы нас снова
                    поддержите <span className='noHyph'>в новом</span> проекте!
                </span>
            </p>
        </div>
    );
};

export default NewBookPrologue;
