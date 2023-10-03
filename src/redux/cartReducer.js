import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modify(state, action) {
            const index = state.findIndex(
                (item) => item.id === action.payload.id
            );
            const item = state[index];
            if (action.payload.method === 'add') {
                if (item) {
                    item.donations.push(action.payload.donation);
                } else {
                    state.unshift({
                        id: action.payload.id,
                        donations: [action.payload.donation]
                    });
                }
                const gratisIndex = state.findIndex(
                    (item) => item.id === 'gratis'
                );
                if (gratisIndex >= 0) {
                    const gratis = state.splice(gratisIndex, 1)[0];
                    state.unshift(gratis);
                }
            } else {
                item.donations.pop();
                if (item.donations.length === 0) {
                    state.splice(index, 1);
                }
            }
            localStorage.setItem('cart', JSON.stringify(state));
        },
        empty(state) {
            state = [];
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});

const { modify, empty } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export const modifyItem = (id, method, donation) =>
    modify({ id, method, donation });
export const emptyCart = () => empty();
export const getAmountById = (id) => (state) => {
    const itemById = state.cart.find((item) => item.id === id);
    return itemById ? itemById.donations.length : 0;
};
export const getCart = () => (state) => state.cart;
export const getLastDonation = () => (state) => {
    const gratis = state.cart.find((item) => item.id === 'gratis');
    return gratis ? gratis.donations[gratis.donations.length - 1] : null;
};
export const getSumById = (id) => (state) => {
    const itemById = state.cart.find((item) => item.id === id);
    return itemById
        ? itemById.donations.reduce((acc, donation) => acc + donation, 0)
        : 0;
};

export default cartReducer;
