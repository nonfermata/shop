import React from 'react';
import { Link } from 'react-router-dom';
import classes from './newBookPrologue.module.css';

const NewBookPrologue = () => {
    return (
        <div className={classes.newBookPrologueWrap}>
            <p>
                <span className='fw600'>Дорогие друзья!</span>
            </p>
            <p>
                Мы готовим к выходу новую книгу.{' '}
                <span className='fw600 orange noHyph'>Открываем сбор!</span>
            </p>
            <p>
                Средства, вырученные от продаж на этом сайте, пойдут на её
                издание.
            </p>
            <p>
                Благодаря вашей поддержке вышло две детские книги{' '}
                <Link className={classes.link} to='/items/devochki'>
                    «Все девочки мечтают о&nbsp;бальных платьях»
                </Link>{' '}
                и&nbsp;
                <Link className={classes.link} to='/items/polya'>
                    <span className='noHyph'>«Поля и снеговик»</span>
                </Link>
                , а&nbsp;также книга-сборник{' '}
                <Link className={classes.link} to='/items/accords'>
                    <span className='noHyph'>«Группа “Белая Гвардия”.</span>{' '}
                    <span className='noHyph'>Все песни, все аккорды»</span>
                </Link>
                . <span className='fw600 orange'>Спасибо вам за доверие!</span>
            </p>
            <p>Сейчас мы готовим к изданию новую книгу, уже не-детскую.</p>
            <p className='fw600'>
                И мы верим, что вы снова нас поддержите в&nbsp;новом проекте!
            </p>
            <p></p>
            <p></p>
            {/*<p>*/}
            {/*    <span className='noHyph'>Её издание</span> планируется{' '}*/}
            {/*    <span className='fw600 noHyph'>летом 2025 г.</span>*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    Благодаря вашей активной поддержке уже собрана основная сумма{' '}*/}
            {/*    <span className='noHyph'>[400 000 ₽],</span> необходимая для*/}
            {/*    печати книги <span className='noHyph'>в типографии.</span>{' '}*/}
            {/*    Средства, собранные сверх этой суммы, пойдут на продвижение{' '}*/}
            {/*    <span className='noHyph'>и маркетинг.</span>{' '}*/}
            {/*    <span className='noHyph'>И тогда</span> больше людей смогут*/}
            {/*    узнать <span className='noHyph'>о нашей группе</span>{' '}*/}
            {/*    <span className='noHyph'>и нашей</span> новой книге.*/}
            {/*</p>*/}
            {/*<p>*/}
            {/*    <span className='orange fw600 noHyph'>*/}
            {/*        Сердечно благодарим Вас за поддержку!*/}
            {/*    </span>*/}
            {/*</p>*/}
        </div>
    );
};

export default NewBookPrologue;
