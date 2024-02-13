import React from 'react';
import { getItemsSum } from '../../../../../utils/cartUtil';
import classes from './itemsList.module.css';
import formatSum from '../../../../../utils/formatSum';
import ItemsListHTML from './itemsListHTML';

const ListBefore = ({ cart }) => {
    const itemsSum = getItemsSum(cart);
    return (
        <>
            <div className={classes.listTitle}>У вас в корзине:</div>
            <ItemsListHTML cart={cart} isDelivery={false} />
            <div className={classes.listItemsSum}>
                Всего на сумму:{' '}
                <span className='fw600'>{formatSum(itemsSum)} ₽</span>
            </div>
        </>
    );
};

export default ListBefore;
