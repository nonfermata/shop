import React from 'react';
import { useNavigate, Navigate, useParams } from 'react-router-dom';
import classes from './itemPage.module.css';
import Gratis from '../../ui/gratis/gratis';
import { getItemById } from '../../../data/allItems';
import { getItemInfoByName } from '../../../data/itemsInfo';
import ItemModifyForm from '../../common/cartManagerForm/itemModifyForm/itemModifyForm';
import EmptyBlock from '../../common/emptyBlock/emptyBlock';
import ItemTrackList from './itemTrackList';
// import NewBookPrologue from './newBookPrologue/newBookPrologue';
import Spreads from './spreads/spreads';
import Tales from './tales/tales';
import EVersionsGroup from '../../ui/card/eVersionsGroup/eVersionsGroup';
import ItemNewMsg from '../../common/itemNewMsg/itemNewMsg';

const ItemPage = () => {
    const navigate = useNavigate();
    const { itemId } = useParams();
    const _item = getItemById(itemId);
    if (!_item) {
        return <Navigate to='items/polya' />;
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
        case 'polya':
        case 'epolya':
            imageWidth = 'smallImage';
            break;
        default:
            imageWidth = 'middleImage';
    }
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
            {/*{itemId === 'polya' && <NewBookPrologue />}*/}
            <div className={classes.allItemContentWrap}>
                <div className={classes.itemWrap}>
                    <div className={classes.rightColumn}>
                        {itemId === 'polya' ||
                            (itemId === 'epolya' && (
                                <div className={classes.itemMsgWrap}>
                                    <ItemNewMsg />
                                </div>
                            ))}
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
                        {!isAvailable && <EVersionsGroup />}
                    </div>
                    <div className={classes.leftColumn}>
                        <div className={classes.itemTitleWrap}>
                            <h1 className={classes.itemName}>{name}</h1>
                            <p className='itemYear'>{year}</p>
                        </div>

                        <p className={classes.subtitle}>{subtitle}</p>
                        <ItemTrackList isOrderedList={type !== 'book'}>
                            {!Array.isArray(trackList) && (
                                <p className={classes.cdNumber}>CD1</p>
                            )}
                            {firstTrackList.map((track) => (
                                <li key={track}>{track}</li>
                            ))}
                        </ItemTrackList>
                        {type === 'book' &&
                            itemId !== 'polya' &&
                            itemId !== 'epolya' && <Spreads name={name} />}
                        {(itemId === 'polya' || itemId === 'epolya') && (
                            <Tales />
                        )}
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
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </>
                )}
                <p className={classes.copyright}>
                    ©&nbsp;&nbsp;{year}&nbsp;&nbsp;{copyright}
                </p>
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
