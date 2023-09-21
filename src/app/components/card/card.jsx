import React from 'react';
import classes from './card.module.css';
import { useNavigate } from 'react-router-dom';
import DonationModifyForm from '../common/cartManagerForm/donationModifyForm/donationModifyForm';
import ItemModifyForm from '../common/cartManagerForm/itemModifyForm/itemModifyForm';

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
    let imageWidth;
    switch (id) {
        case 'devochki':
            imageWidth = '300px';
            break;
        case 'accords':
        case 'interview':
            imageWidth = '220px';
            break;
        case 'epub_devochki':
        case 'epub_accords':
        case 'epub_interview':
        case 'epub_fiveStories':
            imageWidth = '190px';
            break;
        case 'fiveStories':
        case 'new_book':
            imageWidth = '170px';
            break;
        default:
            imageWidth = '100%';
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
            <img
                style={{ width: imageWidth }}
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
