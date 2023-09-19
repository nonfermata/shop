import React from 'react';
import classes from './amountManager.module.css';
import ManagerButton from '../managerButton/managerButton';

const AmountManager = ({ onClick, amount, error = '', buttonsTitles }) => {
    return (
        <div className={classes.amountManagerWrap}>
            <ManagerButton
                onClick={() => {
                    onClick('subtract');
                }}
                title={buttonsTitles[0]}
            >
                -
            </ManagerButton>
            <div className={classes.amountText}>{amount}</div>
            <ManagerButton
                onClick={() => {
                    onClick('add');
                }}
                title={buttonsTitles[1]}
                disabled={error}
            >
                +
            </ManagerButton>
        </div>
    );
};

export default AmountManager;
