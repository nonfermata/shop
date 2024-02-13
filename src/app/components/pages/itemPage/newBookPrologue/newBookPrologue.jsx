import React from 'react';
import classes from './newBookPrologue.module.css';

const NewBookPrologue = () => {
    return (
        <div className={classes.newBookPrologueWrap}>
            <p>
                <span className='fw600'>Дорогие друзья!</span>
            </p>
            <p>Мы готовим к выходу новую детскую книгу для самых маленьких.</p>
            <p>
                <span className='noHyph'>Её издание</span> планируется{' '}
                <span className='fw600 noHyph'>в феврале 2024 г.</span>
            </p>
            <p>
                Благодаря вашей активной поддержке уже собрана основная сумма{' '}
                <span className='noHyph'>[350 000 ₽],</span> необходимая для
                печати книги <span className='noHyph'>в типографии.</span>{' '}
                Средства, собранные сверх этой суммы, пойдут на продвижение{' '}
                <span className='noHyph'>и маркетинг.</span>{' '}
                <span className='noHyph'>И тогда</span> больше людей смогут
                узнать <span className='noHyph'>о нашей группе</span>{' '}
                <span className='noHyph'>и нашей</span> новой книге.
            </p>
            <p>
                <span className='orange fw600 noHyph'>
                    Сердечно благодарим Вас за поддержку!
                </span>
            </p>
        </div>
    );
};

export default NewBookPrologue;
