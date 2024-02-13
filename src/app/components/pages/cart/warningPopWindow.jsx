import React from 'react';
import classes from './cart.module.css';
import CrossIcon from '../../common/crossIcon/crossIcon';

const WarningPopWindow = () => {
    return (
        <div className={classes.warningPopWindow}>
            <span className='noHyph fw600'>Обращаем ваше внимание,</span> что в
            вашей корзине наряду с другими материальными покупками есть также
            новая книга{' '}
            <span className='noHyph fw600'>&ldquo;Поля и снеговик&rdquo;.</span>
            <br />
            <span className='fw600 strongOrange noHyph'>
                Эта книга ещё в работе!
            </span>
            <br />
            Если вы хотите получить другие диски (книги) уже сейчас, удалите
            новую книгу из корзины. И оформите её покупку отдельно.
            <br />
            Мы пришлем вам эту книгу{' '}
            <span className='fw600'>после ее издания.</span> И, соответственно,
            придется дополнительно оплатить ее доставку.
            <br />
            Если вы хотите получить все товары в одной посылке, вы можете
            оформить покупку сейчас, а посылку мы вам пришлем, уже когда выйдет новая книга.
            <br />
            Предположительная дата выхода –{' '}
            <span className='fw600'>февраль 2024.</span>
            <div className={classes.crossWrap}>
                <CrossIcon />
            </div>
        </div>
    );
};

export default WarningPopWindow;
