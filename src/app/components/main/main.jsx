import React from 'react';
import Header from '../header/header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cd from '../categories/cd';
import Mp3 from '../categories/mp3';
import Flac from '../categories/flac';
import Wav from '../categories/wav';
import Books from '../categories/books';
// import Epub from '../categories/epub';
import Cart from '../cart/cart';
import ItemPage from '../itemPage/itemPage';
import Tale from '../itemPage/tales/tale';
import SupportersList from '../supportersList/supportersList';

const Main = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='cd' element={<Cd />} />
                <Route path='mp3' element={<Mp3 />} />
                <Route path='flac' element={<Flac />} />
                <Route path='wav' element={<Wav />} />
                <Route path='books' element={<Books />} />
                {/*<Route path='epub' element={<Epub />} />*/}
                <Route path='cart' element={<Cart />} />
                <Route path='items/:itemId/' element={<ItemPage />} />
                <Route path='items/:itemId/:taleId' element={<Tale />} />
                <Route path='support-list' element={<SupportersList isMobile={true} />} />
                <Route path='*' element={<Navigate to='items/new_book' />} />
            </Routes>
        </>
    );
};

export default Main;
