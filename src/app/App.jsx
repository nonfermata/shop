import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { closePop, getAllPopsStatus } from '../redux/isPopVisibleReducer';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './components/ui/footer/footer';
import ForeignUsersStart from './components/ui/foreignUsersStart/foreignUsersStart';
import Confirmation from './components/layouts/payment/_paymentPage/confirmation';
import Main from './components/layouts/main/main';
import FinalStage from './components/layouts/payment/_paymentPage/finalStage';

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
                    <Route path='payment' element={<FinalStage />} />
                </Routes>
                <Footer />
                <ForeignUsersStart />
            </div>
        </>
    );
};

export default App;
