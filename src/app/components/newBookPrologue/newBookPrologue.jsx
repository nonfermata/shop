import React from 'react';
import classes from './newBookPrologue.module.css';

const NewBookPrologue = () => {
    return (
        <div className={classes.newBookPrologueWrap}>
            <p>
                <span className='fw600'>Дорогие друзья!</span>
            </p>
            <p></p>
            <p></p>
            <p>Мы готовим к выходу новую детскую книгу. </p>
            <p>
                <span className='orange fw600'>Открываем сбор!</span>{' '}
            </p>
            <p>Весной этого года благодаря вашей поддержке мы выпустили </p>
            <p>
                новый альбом и Книгу сказок для детей и взрослых. <span className='orange fw500'>Спасибо вам за
                доверие!</span>
            </p>
            <p></p>
            <p>А теперь в наших планах книга для самых маленьких.</p>
            <p></p>
            <p>Она уже написана, художник работает над иллюстрациями.</p>
            <p><span className='fw500'>И мы верим, что вы нас снова поддержите в новом проекте!</span></p>
        </div>
    );
};

export default NewBookPrologue;
