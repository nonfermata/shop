import React from 'react';
import Header from '../../ui/header/header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Cd from '../../pages/categories/cd';
import Mp3 from '../../pages/categories/mp3';
import Flac from '../../pages/categories/flac';
import Wav from '../../pages/categories/wav';
import Books from '../../pages/categories/books';
import Cart from '../../pages/cart/cart';
import ItemPage from '../../pages/itemPage/itemPage';
import Tale from '../../pages/itemPage/tales/tale';
import SupportersList from '../../ui/supportersList/supportersList';
import StartPage from '../../pages/startPage/startPage';
import Support from '../../pages/support/support';
import Ebooks from '../../pages/categories/ebooks';

const Main = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<StartPage />} />
                <Route path='books' element={<Books />} />
                <Route path='ebooks' element={<Ebooks />} />
                <Route path='cd' element={<Cd />} />
                <Route path='mp3' element={<Mp3 />} />
                <Route path='flac' element={<Flac />} />
                <Route path='wav' element={<Wav />} />
                <Route path='support' element={<Support />} />
                <Route path='cart' element={<Cart />} />
                <Route path='items/:itemId/' element={<ItemPage />} />
                <Route path='items/:itemId/:taleId' element={<Tale />} />
                <Route
                    path='support-list'
                    element={<SupportersList isMobile={true} />}
                />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        </>
    );
};

export default Main;
