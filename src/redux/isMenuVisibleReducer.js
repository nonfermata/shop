import { createSlice } from '@reduxjs/toolkit';

const initialState = { burger: false, alboms: false, books: false };

const isBurgerMenuVisibleSlice = createSlice({
    name: 'burgerMenu',
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

const { toggle, close } = isBurgerMenuVisibleSlice.actions;
const isMenuVisibleReducer = isBurgerMenuVisibleSlice.reducer;

export const toggleMenuStatus = (menuName) => toggle(menuName);
export const closeMenu = (menuName) => close(menuName);
export const getAllMenusStatus = () => (state) => state.mobileMenu;

export default isMenuVisibleReducer;
