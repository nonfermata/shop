import React, { useState } from 'react';
import polyaTales from '../../../../data/polyaTales';
import classes from './tales.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllPopsStatus,
    togglePopStatus
} from '../../../../../redux/isPopVisibleReducer';
import withInnerWindow from '../../../ui/hoc/withInnerWindow';
import CrossIcon from '../../../common/crossIcon/crossIcon';
const Text = ({ tale }) => {
    const handleClick = (e) => {
        e.stopPropagation();
    };
    return (
        <div className={classes.taleTextWrap}>
            <div className={classes.taleText} onClick={handleClick}>
                <p className={classes.taleName}>{tale.name}</p>
                {tale.text}
            </div>
            <div className={classes.crossWrap}>
                <CrossIcon />
            </div>
        </div>
    );
};
const Tales = () => {
    const dispatch = useDispatch();
    const isPop = useSelector(getAllPopsStatus()).darkWindow;
    const HOCTale = withInnerWindow(Text);
    const [tale, setTale] = useState();
    const handleClick = (tale) => {
        setTale(tale);
        dispatch(togglePopStatus('darkWindow'));
    };
    return (
        <div className={classes.talesWrap}>
            {polyaTales.map(({ id, name, text }) => (
                <div
                    key={id}
                    className={classes.taleTitle}
                    onClick={() => {
                        handleClick({ name, text });
                    }}
                >
                    {name}
                </div>
            ))}
            {isPop && <HOCTale tale={tale} />}
        </div>
    );
};

export default Tales;
