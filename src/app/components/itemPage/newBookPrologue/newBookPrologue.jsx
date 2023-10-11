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
            <p>
                <span className='u'>Все средства, вырученные от продаж на этом сайте, пойдут на её
                    издание.</span>
            </p>
            <p>Летом этого года благодаря вашей поддержке мы выпустили </p>
            <p>
                новый альбом <span className='noHyph'>и Книгу</span> Сказок для
                детей <span className='noHyph'>и взрослых.</span>{' '}
                <span className='orange fw600 noHyph'>
                    Спасибо вам за доверие!
                </span>
            </p>
            <p>
                Сейчас мы готовим <span className='noHyph'>к изданию</span>{' '}
                книгу для самых маленьких.
            </p>
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
