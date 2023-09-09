import { createSlice } from '@reduxjs/toolkit';
import { cd, books } from '../app/data/data';

export const allItems = [...cd, ...books];
const initialArr = allItems.map((item) => ({ [item.id]: 0 }));

const initialState = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : initialArr;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        modify(state, action) {
            const index = state.findIndex(
                (item) => item[action.payload.id] !== undefined
            );
            action.payload.method === 'add'
                ? state[index][action.payload.id]++
                : state[index][action.payload.id]--;
            localStorage.setItem('cart', JSON.stringify(state));
        }
    }
});

const { modify } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export const modifyItem = (id, method) => modify({ id, method });
export const getAmountById = (id) => (state) =>
    state.cart.find((item) => item[id] !== undefined)[id];
export const getCartIds = () => (state) => state.cart;

export default cartReducer;
