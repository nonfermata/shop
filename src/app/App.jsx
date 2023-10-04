import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { closePop, getAllPopsStatus } from '../redux/isPopVisibleReducer';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/footer/footer';
import ForeignUsersStart from './components/payment/foreignUsersStart/foreignUsersStart';
import Confirmation from './components/payment/_paymentPage/confirmation';
import Main from './components/main/main';
import FinalPayment from './components/payment/_paymentPage/finalPayment';

const App = () => {
    const dispatch = useDispatch();
    const allMenusStatus = useSelector(getAllPopsStatus());
    const handleClick = () => {
        for (const key in allMenusStatus) {
            if (allMenusStatus[key]) {
                dispatch(closePop(key));
            }
        }
    };
    return (
        <>
            <div className='container' onClick={handleClick}>
                <Routes>
                    <Route path='/*' element={<Main />} />
                    <Route path='confirmation' element={<Confirmation />} />
                    <Route path='payment' element={<FinalPayment />} />
                </Routes>
                <Footer />
                <ForeignUsersStart />
            </div>
        </>
    );
};

export default App;
