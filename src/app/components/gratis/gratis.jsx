import React from 'react';
import classes from './gratis.module.css';
import { useSelector } from 'react-redux';
import { getAmountById, getSumById } from '../../../redux/cartReducer';
import formatSum from '../../utils/formatSum';
import DonationModifyForm from '../common/cartManagerForm/donationModifyForm/donationModifyForm';
import UndoDonate from '../common/cartManagerForm/undoDonate/undoDonate';
import lotos from '../../assets/images/lotos.png';

const Gratis = () => {
    const amount = useSelector(getAmountById('gratis')) || 0;
    const totalSum = useSelector(getSumById('gratis'));

    return (
        <div className={classes.gratisWrap}>
            <img src={lotos} alt='Поддержать' />
            <div className={classes.gratisTitleWrap}>
                <p className={classes.gratisTitle}>
                    Вы можете безвозмездно поддержать нас любой суммой,{' '}
                    <span className='noHyph'>
                        которую посчитаете возможной.
                    </span>
                </p>
                <p className='semiGreenThankYou fw500'>С П А С И Б О !</p>
            </div>
            <div className={classes.donationsWrap}>
                <DonationModifyForm initialButtonText='Поддержать' />
                {amount !== 0 && (
                    <>
                        <div className={classes.donationsInfo}>
                            Безвозмездной поддержки – на{' '}
                            <span className={classes.donationsSum}>
                                {formatSum(totalSum)}
                            </span>{' '}
                            ₽
                        </div>
                        <UndoDonate />
                    </>
                )}
            </div>
        </div>
    );
};

export default Gratis;
