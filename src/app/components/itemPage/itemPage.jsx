import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import classes from './itemPage.module.css';
import Gratis from '../gratis/gratis';
import { getItemById } from '../../data/allItems';
import { getItemInfoByName } from '../../data/itemsInfo';
import ItemModifyForm from '../common/cartManagerForm/itemModifyForm/itemModifyForm';
import EmptyBlock from '../common/emptyBlock/emptyBlock';
import ItemTrackList from './itemTrackList';

const ItemPage = () => {
    const navigate = useNavigate();
    const { itemId } = useParams();
    const {
        name,
        image,
        year,
        price,
        isAvailable,
        shotDescr,
        subtitle,
        isDigital,
        type
    } = getItemById(itemId);
    let imageWidth;
    switch (itemId) {
        case 'devochki':
        case 'epub_devochki':
            imageWidth = 100;
            break;
        case 'fiveStories':
        case 'epub_fiveStories':
        case 'new_book':
            imageWidth = 70;
            break;
        default:
            imageWidth = 80;
    }
    const doublePrefix = name === 'Ретроспектива' ? 'двойной ' : '';
    const { trackList, description, copyright, backImage } =
        getItemInfoByName(name);

    const firstTrackList = Array.isArray(trackList)
        ? trackList
        : trackList.list1;

    const firstDescription = description
        ? Array.isArray(description)
            ? description
            : description.description1
        : shotDescr;
    return (
        <>
            <Gratis />
            {itemId === 'new_book' && (
                <div className={classes.newItemWrap}>
                    Дорогие друзья!
                    <br />
                    <br />
                    Весной этого года вы нас поддержали, молодцы, поддержите
                    ещё!..
                    <br />
                    Готовим к выходу новую детскую книгу... Открываем сбор!
                    <br />
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . .<br />
                    . . . . . . . . . . и всё такое прочее . . . . . . . . . . .
                    . . .<br />
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . .<br />
                    Мы верим, что вы нас поддержите, как и в предыдущие года!..
                </div>
            )}
            <div className={classes.allItemContentWrap}>
                <div className={classes.itemWrap}>
                    <div className={classes.leftColumn}>
                        <div className={classes.itemTitleWrap}>
                            <h1 className={classes.itemName}>{name}</h1>
                            {itemId !== 'new_book' && (
                                <p className='itemYear'>{year}</p>
                            )}
                        </div>

                        <p className={classes.subtitle}>
                            {doublePrefix + subtitle}
                        </p>
                        <ItemTrackList isOrderedList={type !== 'book'}>
                            {!Array.isArray(trackList) && (
                                <p className={classes.cdNumber}>CD1</p>
                            )}
                            {firstTrackList.map((track) => (
                                <li key={track}>{track}</li>
                            ))}
                        </ItemTrackList>
                    </div>
                    <div className={classes.rightColumn}>
                        <img
                            src={image}
                            alt={name}
                            style={{ width: imageWidth + '%' }}
                        />
                        <p className={classes.itemPrice}>{price} ₽</p>
                        <ItemModifyForm
                            id={itemId}
                            price={price}
                            isAvailable={isAvailable}
                            isDigital={isDigital}
                        />
                    </div>
                    <ul className={classes.descriptionList}>
                        {firstDescription.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
                {!Array.isArray(trackList) && (
                    <>
                        <EmptyBlock height={30} />
                        <div className={classes.itemWrap}>
                            <div className={classes.leftColumn}>
                                {type === 'book' ? (
                                    ''
                                ) : (
                                    <ol className={classes.trackList}>
                                        {!Array.isArray(trackList) && (
                                            <p className={classes.cdNumber}>
                                                CD2
                                            </p>
                                        )}
                                        {trackList.list2.map((track) => (
                                            <li key={track}>{track}</li>
                                        ))}
                                    </ol>
                                )}
                            </div>
                            <div className={classes.rightColumn}>
                                <img
                                    src={backImage}
                                    alt={name}
                                    style={{ width: imageWidth + '%' }}
                                />
                            </div>
                            <ul className={classes.descriptionList}>
                                {description.description2.map((item) => (
                                    <li>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}

                {itemId !== 'new_book' && (
                    <p className={classes.copyright}>
                        ©&nbsp;&nbsp;{year}&nbsp;&nbsp;{copyright}
                    </p>
                )}
                <div
                    onClick={() => {
                        navigate(-1);
                    }}
                    className={classes.backButton}
                >
                    ‹ НАЗАД
                </div>
            </div>
        </>
    );
};

export default ItemPage;