import React from 'react';
import classes from './supportersList.module.css';
import supporters from '../../data/supporters';
import formatSum from '../../utils/formatSum';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';

const SupportersList = ({ isMobile }) => {
    return (
        <>
            {isMobile && <Gratis />}
            <CategoryHeader title='Нас поддержали' addedClass='green' />
            {/*<div className={classes.subTitle}>*/}
            {/*    список обновляется несколько раз в день*/}
            {/*</div>*/}
            <ol className={classes.supportersWrap}>
                {supporters.map(({ id, name, region, sum }) => (
                    <li key={id} className={classes.supporterWrap}>
                        <div className={classes.listNameAndRegionWrap}>
                            <div className={classes.listName}>{name}</div>
                            <div className={classes.listRegion}>{region}</div>
                        </div>
                        <div className={classes.listSum}>
                            {formatSum(sum)} ₽
                        </div>
                    </li>
                ))}
            </ol>
            <div className={classes.thankYou}>С П А С И Б О !</div>
        </>
    );
};

export default SupportersList;
