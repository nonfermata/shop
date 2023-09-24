import React from 'react';
import classes from './donationCard.module.css';
import DonationModifyForm from '../cartManagerForm/donationModifyForm/donationModifyForm';
import lotos from '../../../assets/images/lotos.png';

const DonationCard = ({ category }) => {
    class Styles {
        constructor(forBooksWrap, forBooksInfo) {
            this.forBooksWrap = forBooksWrap;
            this.forBooksInfo = forBooksInfo;
        }
    }
    const addedStyles =
        category === 'books'
            ? new Styles(
                  classes.booksDonationCardWrap,
                  classes.booksDonationInfoWrap
              )
            : new Styles('', '');
    const { forBooksWrap, forBooksInfo } = addedStyles;
    return (
        <div className={classes.donationCardWrap + ' ' + forBooksWrap}>
            <img src={lotos} alt='Поддержать' />
            <div className={classes.donationInfoWrap + ' ' + forBooksInfo}>
                <h1 className={'itemName center'}>
                    Вы можете безвозмездно нас поддержать любой суммой, которую
                    сочтете возможной.
                </h1>
                <p className={'itemName ' + classes.thankYou}>Спасибо!</p>
                <DonationModifyForm initialButtonText='Добавить в корзину' />
            </div>
        </div>
    );
};

export default DonationCard;
