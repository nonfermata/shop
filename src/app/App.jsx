import React from 'react';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Cd from './components/categories/cd';
import Cart from './components/cart/cart';
import Books from './components/categories/books';
import Mp3 from './components/categories/mp3';
import Flac from './components/categories/flac';
import Wav from './components/categories/wav';
import Epub from './components/categories/epub';
import ItemPage from './components/itemPage/itemPage';

const App = () => {
    return (
        <div className='container'>
            <Navbar />
            <Routes>
                <Route path='cd' element={<Cd />} />
                <Route path='mp3' element={<Mp3 />} />
                <Route path='flac' element={<Flac />} />
                <Route path='wav' element={<Wav />} />
                <Route path='books' element={<Books />} />
                <Route path='epub' element={<Epub />} />
                <Route path='cart' element={<Cart />} />
                <Route path='items/:itemId' element={<ItemPage />} />
            </Routes>
        </div>
    );
};

export default App;
