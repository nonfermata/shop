import React from 'react';
import classes from './startPage.module.css';
import PayModes from '../../common/payModes/payModes';
import { Link } from 'react-router-dom';
import bgvLogo from '../../../assets/images/bgvLogo.png';

const StartPage = () => {
    return (
        <>
            <div className={classes.startPageWrap}>
                <img src={bgvLogo} />
                <p className={classes.startTitle}>
                    Вы находитесь на официальном сайте магазина группы{' '}
                    <span className='noHyph'>«Белая Гвардия».</span>
                </p>
                <p>
                    Здесь Вы можете приобрести наши{' '}
                    <Link className={classes.link} to='cd'>
                        АЛЬБОМЫ
                    </Link>{' '}
                    и{' '}
                    <Link className={classes.link} to='books'>
                        КНИГИ.
                    </Link>
                </p>
                <p>
                    Также Вы можете подддержать нас любым донатом безвозмездно.
                    У нас временно нет концертов по объективным причинам.{' '}
                    <span className='noHyph'>Мы сейчас</span> живем благодаря
                    вашей поддержке.
                </p>
                <p>
                    Сейчас ваши донаты идут{' '}
                    <span className='fw600'>на издание новой книги.</span>{' '}
                    <Link className='link noHyph' to='items/rim'>
                        Подробней о книге »
                    </Link>
                </p>
                <PayModes />
            </div>
        </>
    );
};

export default StartPage;
