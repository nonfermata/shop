import React from 'react';
import classes from './card.module.css';
import { useNavigate } from 'react-router-dom';
import ItemModifyForm from '../../common/cartManagerForm/itemModifyForm/itemModifyForm';
import ItemNewMsg from '../../common/itemNewMsg/itemNewMsg';
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
    isDigital = true,
    bookSize = ''
}) => {
    // let bookSize;
    // switch (id) {
    //     case 'devochki':
    //     case 'edevochki':
    //         bookSize = 'largeBookImage';
    //         break;
    //     case 'accords':
    //     case 'eaccords':
    //     case 'interview':
    //     case 'einterview':
    //         bookSize = 'middleBookImage';
    //         break;
    //     case 'fiveStories':
    //     case 'efiveStories':
    //     case 'polya':
    //     case 'epolya':
    //         bookSize = 'smallBookImage';
    //         break;
    //     default:
    //         bookSize = '';
    // }

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
            {(id === 'rim' || id === 'erim') && <ItemNewMsg />}
            <div
                onClick={handleImageClick}
                className={
                    classes.ordinaryImage + ' ' + classes[bookSize]
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
