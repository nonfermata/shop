import { createSlice } from '@reduxjs/toolkit';

const isBurgerMenuVisibleSlice = createSlice({
    name: 'burgerMenu',
    initialState: { isActive: false },
    reducers: {
        toggle(state) {
            state.isActive = !state.isActive;
        },
        reset(state) {
            state.isActive = false;
        }
    }
});

const { toggle, reset } = isBurgerMenuVisibleSlice.actions;
const isBurgerMenuVisibleReducer = isBurgerMenuVisibleSlice.reducer;

export const toggleBurgerMenu = () => toggle();
export const resetBurgerMenu = () => reset();
export const getBurgerMenu = () => (state) => state.burgerMenu.isActive;

export default isBurgerMenuVisibleReducer;
