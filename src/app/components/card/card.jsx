import React from 'react';
import classes from './card.module.css';
import { useNavigate } from 'react-router-dom';
import DonationModifyForm from '../common/cartManagerForm/donationModifyForm/donationModifyForm';
import ItemModifyForm from '../common/cartManagerForm/itemModifyForm/itemModifyForm';
import Crowdfunding from '../common/crowdfunding/crowdfunding';

const Card = ({
    id,
    name,
    price,
    year,
    image,
    isAvailable,
    shotDescr,
    type,
    isDigital = true
}) => {
    let bookImageWidth;
    switch (id) {
        case 'devochki':
            bookImageWidth = 'largeBookImage';
            break;
        case 'accords':
        case 'interview':
            bookImageWidth = 'middleBookImage';
            break;
        case 'epub_devochki':
        case 'epub_accords':
        case 'epub_interview':
        case 'epub_fiveStories':
            bookImageWidth = 'eBookImage';
            break;
        case 'fiveStories':
        case 'new_book':
            bookImageWidth = 'smallBookImage';
            break;
        default:
            bookImageWidth = '';
    }
    class Styles {
        constructor(cardWrap, itemInfo) {
            this.cardWrap = cardWrap;
            this.itemInfo = itemInfo;
        }
    }
    const addedStyles =
        type === 'book'
            ? new Styles(classes.bookCardWrap, classes.bookItemInfo)
            : new Styles('', '', '');
    const navigate = useNavigate();
    const { cardWrap, itemInfo } = addedStyles;

    return (
        <div className={classes.cardWrap + ' ' + cardWrap}>
            {id === 'new_book' && <Crowdfunding />}
            <img
                className={
                    classes.ordinaryImage + ' ' + classes[bookImageWidth]
                }
                src={image}
                alt={name}
                onClick={() => navigate(`/items/${id}`)}
            />
            <div className={itemInfo}>
                <p className='itemName'>{name}</p>
                <p className='itemYear'>{year}</p>
                {shotDescr && (
                    <div className={classes.shotDescr}>
                        {shotDescr.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                )}
                <p className={classes.itemPrice}>{price} ₽</p>
                <ItemModifyForm
                    id={id}
                    price={price}
                    isAvailable={isAvailable}
                    isDigital={isDigital}
                />
                {isAvailable && (
                    <div className={classes.donationWrap}>
                        <h3 className={classes.donationTitle}>
                            Добавить любую сумму
                        </h3>
                        <DonationModifyForm initialButtonText='Добавить' />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
