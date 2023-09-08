import React from 'react';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Cd from './components/shop/cd';
import Cart from './components/cart/cart';
import Books from './components/shop/books';

const App = () => {
    return (
        <div className='container'>
            <Navbar />
            <Routes>
                <Route path='cd' element={<Cd />} />
                <Route path='books' element={<Books />} />
                <Route path='cart' element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;
