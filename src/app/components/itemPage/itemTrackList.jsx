import React from 'react';
import classes from './itemPage.module.css';

const ItemTrackList = ({ children, isOrderedList }) => {
    return (
        <>
            {isOrderedList ? (
                <ol className={classes.trackList}>{children}</ol>
            ) : (
                <ul style={{ listStyle: 'none' }} className={classes.trackList}>
                    {children}
                </ul>
            )}
        </>
    );
};

export default ItemTrackList;
