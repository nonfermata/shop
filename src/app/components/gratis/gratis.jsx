import React from 'react';
import classes from './gratis.module.css';
import { useSelector } from 'react-redux';
import { getAmountById, getSumById } from '../../../redux/cartReducer';
import { gratis } from '../../data/data';
import undo from '../../assets/svg/undo';
import formatSum from '../../utils/formatSum';
import DonationForm from '../common/donationForm/donationForm';
import UndoDonate from '../common/undoDonate/undoDonate';

const Gratis = () => {
    const { id, name, image } = gratis;
    const amount = useSelector(getAmountById(id)) || 0;
    const totalSum = useSelector(getSumById(id));

    return (
        <div className={classes.gratisWrap}>
            <div className={classes.inputGroupWrap}>
                <img src={image} alt={name} />
                <p className='itemName'>Поддержать на любую сумму</p>
                &nbsp;»&nbsp;
                <DonationForm
                    initialButtonText='Добавить в корзину'
                />
            </div>
            <div className={classes.donationsInfoWrap}>
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
