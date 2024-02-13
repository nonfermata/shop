import React from 'react';
import classes from './supportersList.module.css';
import supporters from '../../../data/supporters';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../../common/categoryHeader/categoryHeader';

const SupportersList = ({ isMobile }) => {
    const publishedSupporters = supporters.filter((item) => item.region);
    return (
        <>
            {isMobile && <Gratis />}
            <CategoryHeader title='Нас поддержали' addedClass='green' />
            <ol className={classes.supportersWrap}>
                {publishedSupporters.map(({ id, name, region }) => (
                    <li key={id} className={classes.supporterWrap}>
                        <div className={classes.listNameAndRegionWrap}>
                            <div className={classes.listName}>{name}</div>
                            <div className={classes.listRegion}>{region}</div>
                        </div>
                    </li>
                ))}
            </ol>
            <div className={classes.thankYou}>С П А С И Б О !</div>
        </>
    );
};

export default SupportersList;
