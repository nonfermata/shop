import React from 'react';
import classes from './crowdfunding.module.css';

const Crowdfunding = () => {
    return (
        <div className={classes.crowdfundingWrap}>
            <div className={classes.crowdfunding}>идет сбор средств</div>
        </div>
    );
};

export default Crowdfunding;
