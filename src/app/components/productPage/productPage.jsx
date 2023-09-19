import React from 'react';
import classes from './productPage.module.css';
import Gratis from '../gratis/gratis';
import CategoryHeader from '../common/categoryHeader/categoryHeader';
import { getProductById } from '../../data/data';

const ProductPage = ({ id }) => {
    const { name, image } = getProductById(id);
    return (
        <>
            <Gratis />
            <CategoryHeader title={name} />
            <div className={classes.productWrap}>
                <img src={image} alt={name} />
            </div>
        </>
    );
};

export default ProductPage;
