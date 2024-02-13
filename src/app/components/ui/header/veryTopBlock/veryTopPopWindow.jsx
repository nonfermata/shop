import React from 'react';
import classes from './veryTopBlock.module.css';
import CrossIcon from '../../../common/crossIcon/crossIcon';

const VeryTopPopWindow = () => {
    return (
        <div className={classes.veryTopPopWindow}>
            Информация о собранной сумме обновляется несколько раз{' '}
            <span className='noHyph'>в сутки</span>,{' '}
            <span className='noHyph'>с интервалом</span>{' '}
            <span className='noHyph'>3-4 часа.</span> <br />
            Предположительное время выхода{' '}
            <span className='noHyph'>книги –</span>{' '}
            <span className='fw500 noHyph'>февраль 2024 года.</span>
            <div className={classes.crossWrap}>
                <CrossIcon />
            </div>
        </div>
    );
};

export default VeryTopPopWindow;
