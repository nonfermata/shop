import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    burger: false,
    alboms: false,
    books: false,
    foreignMessage: false,
    noCommission: false,
    darkWindow: false
};

const isPopVisibleSlice = createSlice({
    name: 'popWindows',
    initialState,
    reducers: {
        toggle(state, action) {
            state[action.payload] = !state[action.payload];
        },
        close(state, action) {
            state[action.payload] = false;
        }
    }
});

const { toggle, close } = isPopVisibleSlice.actions;
const isPopVisibleReducer = isPopVisibleSlice.reducer;

export const togglePopStatus = (windowName) => toggle(windowName);
export const closePop = (windowName) => close(windowName);
export const getAllPopsStatus = () => (state) => state.popWindows;

export default isPopVisibleReducer;
