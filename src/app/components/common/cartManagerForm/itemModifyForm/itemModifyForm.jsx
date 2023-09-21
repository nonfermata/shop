import React, { useState } from 'react';
import classes from './itemModifyForm.module.css';
import AmountManager from '../amountManager/amountManager';
import ModifyButton from '../modifyButton/modifyButton';
import { getAmountById, modifyItem } from '../../../../../redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux';

const ItemModifyForm = ({ id, price, isAvailable, isDigital }) => {
    const amount = useSelector(getAmountById(id)) || 0;
    const [itemButtonStyle, setItemButtonStyle] = useState(
        amount === 0 ? '' : classes.successButton
    );
    const dispatch = useDispatch();
    const modifyCartItem = (method) => {
        if (!(method === 'subtract' && amount === 0)) {
            if (method === 'subtract' && amount === 1) {
                setItemButtonStyle('');
            } else setItemButtonStyle(classes.successButton);
            dispatch(modifyItem(id, method, price));
        }
    };
    const subtractTitle = amount === 1 ? 'Убрать из корзины' : 'Убрать 1 шт';

    return (
        <div className={classes.itemCartManagerWrap}>
            {isAvailable ? (
                <>
                    <button
                        onClick={
                            !amount
                                ? () => {
                                      modifyCartItem('add');
                                  }
                                : () => {}
                        }
                        className={classes.addButton + ' ' + itemButtonStyle}
                        title={amount === 0 ? 'Добавить в корзину' : ''}
                    >
                        {amount === 0
                            ? 'Добавить в корзину'
                            : 'В корзине ' + (amount > 1 ? amount + ' шт' : '')}
                    </button>
                    {amount > 0 && (
                        <>
                            {!isDigital ? (
                                <AmountManager
                                    onClick={modifyCartItem}
                                    amount={amount}
                                    buttonsTitles={[
                                        subtractTitle,
                                        'Добавить 1 шт'
                                    ]}
                                />
                            ) : (
                                <ModifyButton
                                    onClick={() => {
                                        modifyCartItem('subtract');
                                    }}
                                    title='Убрать из корзины'
                                >
                                    -
                                </ModifyButton>
                            )}
                        </>
                    )}
                </>
            ) : (
                <div
                    className={classes.addButton + ' ' + classes.disableItemButton}
                >
                    Временно нет в наличии
                </div>
            )}
        </div>
    );
};

export default ItemModifyForm;
