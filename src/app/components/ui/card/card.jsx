import React from 'react';
import classes from './card.module.css';
import { useNavigate } from 'react-router-dom';
import ItemModifyForm from '../../common/cartManagerForm/itemModifyForm/itemModifyForm';
import ItemComingSoonMsg from '../../common/itemComingSoonMsg/itemComingSoonMsg';
import scrollToTop from '../../../utils/scrollToTop';
import EVersionsGroup from './eVersionsGroup/eVersionsGroup';

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
        case 'polya':
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
    const { cardWrap, itemInfo } = addedStyles;
    const navigate = useNavigate();
    const handleImageClick = () => {
        scrollToTop();
        navigate(`../items/${id}`);
    };
    return (
        <div className={classes.cardWrap + ' ' + cardWrap}>
            {id === 'polya' && <ItemComingSoonMsg />}
            <div
                onClick={handleImageClick}
                className={
                    classes.ordinaryImage + ' ' + classes[bookImageWidth]
                }
            >
                <img src={image} alt={name} />
                <div className={classes.toLookDetails}>смотреть описание</div>
            </div>

            <div className={itemInfo}>
                <h1 className='itemName'>{name}</h1>
                <p className='itemYear'>{year}</p>
                {shotDescr && (
                    <div className={classes.shotDescr}>
                        {shotDescr.map((item) => (
                            <p key={item}>{item}</p>
                        ))}
                    </div>
                )}
                <div className={classes.itemPriceWrap}>
                    <p> {price} ₽</p>
                </div>
                <ItemModifyForm
                    id={id}
                    price={price}
                    isAvailable={isAvailable}
                    isDigital={isDigital}
                />
                {!isAvailable && <EVersionsGroup />}
            </div>
        </div>
    );
};

export default Card;
