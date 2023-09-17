import React from 'react';
import classes from './common.module.css';
import ManagerButton from './managerButton';

const AmountManager = ({ onClick, amount }) => {
    return (
        <div className={classes.amountManagerWrap}>
            <ManagerButton
                onClick={() => {
                    onClick('subtract');
                }}
                title='Убрать'
                disabled={!(amount > 0 )}
            >
                -
            </ManagerButton>
            <div className={classes.amountText}>{amount}</div>
            <ManagerButton
                onClick={() => {
                    onClick('add');
                }}
                title='Добавить'
            >
                +
            </ManagerButton>
        </div>
    );
};

export default AmountManager;
