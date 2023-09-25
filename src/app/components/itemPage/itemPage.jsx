import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import classes from './itemPage.module.css';
import Gratis from '../gratis/gratis';
import { getItemById } from '../../data/allItems';
import { getItemInfoByName } from '../../data/itemsInfo';
import ItemModifyForm from '../common/cartManagerForm/itemModifyForm/itemModifyForm';
import EmptyBlock from '../common/emptyBlock/emptyBlock';
import ItemTrackList from './itemTrackList';
import NewBookPrologue from '../newBookPrologue/newBookPrologue';

const ItemPage = () => {
    const navigate = useNavigate();
    const { itemId } = useParams();
    const _item = getItemById(itemId);
    if (!_item) {
        return <Navigate to='items/new_book' />;
    }
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
    } = _item;
    let imageWidth;
    switch (itemId) {
        case 'devochki':
        case 'epub_devochki':
            imageWidth = 'largeImage';
            break;
        case 'fiveStories':
        case 'epub_fiveStories':
        case 'new_book':
            imageWidth = 'smallImage';
            break;
        default:
            imageWidth = 'middleImage';
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
            {itemId === 'new_book' && <NewBookPrologue />}
            <div className={classes.allItemContentWrap}>
                <div className={classes.itemWrap}>
                    <div className={classes.rightColumn}>
                        <img
                            src={image}
                            alt={name}
                            className={classes[imageWidth]}
                        />
                        <p className={classes.itemPrice}>{price} ₽</p>
                        <ItemModifyForm
                            id={itemId}
                            price={price}
                            isAvailable={isAvailable}
                            isDigital={isDigital}
                        />
                    </div>
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

                    <ul className={classes.descriptionList}>
                        {firstDescription.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                {!Array.isArray(trackList) && (
                    <>
                        <EmptyBlock height={30} />
                        <div className={classes.itemWrap}>
                            <div className={classes.rightColumn}>
                                <img
                                    src={backImage}
                                    alt={name}
                                    className={classes[imageWidth]}
                                />
                            </div>
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
                <button
                    onClick={() => {
                        navigate(-1);
                    }}
                    className={classes.backButton}
                >
                    ‹ НАЗАД
                </button>
            </div>
        </>
    );
};

export default ItemPage;
