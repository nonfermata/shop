import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import classes from './withInnerWindow.module.css';
import { closePop } from '../../../redux/isPopVisibleReducer';

const withInnerWindow = (Component) => (props) => {
    const dispatch = useDispatch();
    const [addedStyle, setAddedStyle] = useState('');
    useEffect(() => {
        setAddedStyle(classes.darkWindowVisible);
    }, []);
    return (
        <div>
            <div
                className={classes.darkWindow + ' ' + addedStyle}
                onClick={() => {
                    dispatch(closePop('darkWindow'));
                }}
            >
                <Component {...props} />
            </div>
        </div>
    );
};

export default withInnerWindow;
