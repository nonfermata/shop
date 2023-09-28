import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { closePop, getAllPopsStatus } from '../redux/isPopVisibleReducer';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/footer/footer';
import ForeignUsersStart from './components/foreignUsersStart/foreignUsersStart';
import Payment from './components/payment/payment';
import Main from './components/main/main';

const App = () => {
    const dispatch = useDispatch();
    const allMenusStatus = useSelector(getAllPopsStatus());
    const handleClick = () => {
        for (let key in allMenusStatus) {
            if (allMenusStatus[key]) {
                dispatch(closePop(key));
            }
        }
    };
    return (
        <div className='container' onClick={handleClick}>
            <Routes>
                <Route path='main/*' element={<Main />} />
                <Route path='payment' element={<Payment />} />
                <Route path='*' element={<Navigate to='main/items/new_book' />} />
            </Routes>
            <Footer />
            <ForeignUsersStart />
        </div>
    );
};

export default App;
