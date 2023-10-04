import React from 'react';
import classes from './tales.module.css';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import polyaTales from '../../../data/polyaTales';
import Gratis from '../../gratis/gratis';

const Tale = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { taleId } = params;
    const tale = polyaTales.find((item) => item.id === taleId);
    if (!tale) {
        return <Navigate to='items/new_book' />;
    }
    return (
        <>
            {' '}
            <Gratis />
            <div className={classes.taleWrap}>
                <div className={classes.taleName}>{tale.name}</div>
                {tale.text}
            </div>
            <button
                onClick={() => {
                    navigate(-1);
                }}
                className={classes.backButton}
            >
                ‹ НАЗАД
            </button>
        </>
    );
};

export default Tale;
