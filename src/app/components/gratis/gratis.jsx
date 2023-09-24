import React from 'react';
import classes from './gratis.module.css';
import { useSelector } from 'react-redux';
import { getAmountById, getSumById } from '../../../redux/cartReducer';
import formatSum from '../../utils/formatSum';
import DonationModifyForm from '../common/cartManagerForm/donationModifyForm/donationModifyForm';
import UndoDonate from '../common/cartManagerForm/undoDonate/undoDonate';
import lotos from '../../assets/images/lotos.png'

const Gratis = () => {
    const amount = useSelector(getAmountById('gratis')) || 0;
    const totalSum = useSelector(getSumById('gratis'));

    return (
        <div className={classes.gratisWrap}>
            <div className={classes.inputGroupWrap}>

                <img src={lotos} alt='Поддержать' />
                <p className={classes.itemName}>Поддержать любой суммой</p>
                &nbsp;»&nbsp;
            </div>
            <div className={classes.donationsInfoWrap}>
                <DonationModifyForm initialButtonText='Добавить в корзину' />
                {amount !== 0 && (
                    <>
                        <div className={classes.donationsInfo}>
                            Безвозмездной поддержки – на{' '}
                            <span className={classes.donationsSum}>
                                {formatSum(totalSum)}
                            </span>{' '}
                            ₽
                            <div className={classes.donationsThanks}>
                                С П А С И Б О !
                            </div>
                        </div>
                        <UndoDonate />
                    </>
                )}
            </div>
        </div>
    );
};

export default Gratis;
