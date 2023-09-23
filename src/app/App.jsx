import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Cd from './components/categories/cd';
import Cart from './components/cart/cart';
import Books from './components/categories/books';
import Mp3 from './components/categories/mp3';
import Flac from './components/categories/flac';
import Wav from './components/categories/wav';
import Epub from './components/categories/epub';
import ItemPage from './components/itemPage/itemPage';
import Header from './components/header/header';
import {
    resetBurgerMenu,
    getBurgerMenuStatus
} from '../redux/isBurgerMenuVisibleReducer';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const dispatch = useDispatch();
    const burgerMenuStatus = useSelector(getBurgerMenuStatus());
    const handleClick = () => {
        if (burgerMenuStatus) {
            dispatch(resetBurgerMenu());
        }
    };
    return (
        <div className='container' onClick={handleClick}>
            <Header />
            <Routes>
                <Route path='cd' element={<Cd />} />
                <Route path='mp3' element={<Mp3 />} />
                <Route path='flac' element={<Flac />} />
                <Route path='wav' element={<Wav />} />
                <Route path='books' element={<Books />} />
                <Route path='epub' element={<Epub />} />
                <Route path='cart' element={<Cart />} />
                <Route path='items/:itemId' element={<ItemPage />} />
                <Route path='*' element={<Navigate to='items/new_book' />} />
            </Routes>
        </div>
    );
};

export default App;
