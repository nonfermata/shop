import React, { useState } from 'react';
import classes from './spreads.module.css';
import spreads from '../../../data/spreads';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../../redux/isPopVisibleReducer';
import withInnerWindow from '../../hoc/withInnerWindow';
import ImageOnly from './imageOnly';

const Spreads = ({ name }) => {
    const itemSpreads = spreads.find((item) => item.name === name).spreads;
    const dispatch = useDispatch();
    const isPop = useSelector(getAllPopsStatus()).darkWindow;
    const HOCImage = withInnerWindow(ImageOnly);
    const [spreadImage, setSpreadImage] = useState();
    const handleClick = (image) => {
        setSpreadImage(image);
        dispatch(togglePopStatus('darkWindow'));
    };
    return (
        <div className={classes.spreadsWrap}>
            {itemSpreads.map(({ id, image, title }) => (
                <div
                    key={id}
                    className={classes.spreadWrap}
                    onClick={() => {
                        handleClick(image);
                    }}
                >
                    <p className={classes.spreadTitle}>{title}</p>
                    <img src={image} alt='Разворот книги' />
                </div>
            ))}
            {isPop && <HOCImage image={spreadImage} />}
        </div>
    );
};

export default Spreads;
