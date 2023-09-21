import React from 'react';
import classes from './amountManager.module.css';
import ModifyButton from '../modifyButton/modifyButton';

const AmountManager = ({ onClick, amount, error = '', buttonsTitles }) => {
    return (
        <div className={classes.amountManagerWrap}>
            <ModifyButton
                onClick={() => {
                    onClick('subtract');
                }}
                title={buttonsTitles[0]}
            >
                -
            </ModifyButton>
            <div className={classes.amountText}>{amount}</div>
            <ModifyButton
                onClick={() => {
                    onClick('add');
                }}
                title={buttonsTitles[1]}
                disabled={error}
            >
                +
            </ModifyButton>
        </div>
    );
};

export default AmountManager;
