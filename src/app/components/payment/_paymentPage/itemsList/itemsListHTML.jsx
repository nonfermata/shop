import React from 'react';
import classes from './itemsList.module.css';
import { getItemsList } from './getItemsList';

const ItemsListHTML = ({ cart }) => {
    const itemsList = getItemsList(cart);
    return (
        <div className={classes.listWrap}>
            {itemsList.map(({ id, name, year, subtitle, amount, totalSum }) => (
                <div className={classes.listItem} key={id}>
                    <span className='fw600'>{name}. </span>
                    {id !== 'gratis' && (
                        <>
                            {year} год. {subtitle}.{' '}
                            <span className='noHyph'>
                                <span className='fw600'>{amount}</span> шт,
                            </span>{' '}
                        </>
                    )}
                    <span className='noHyph'>
                        {id !== 'gratis' ? 'на ' : 'На '}
                        общую сумму <span className='fw600'>{totalSum} ₽</span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ItemsListHTML;
