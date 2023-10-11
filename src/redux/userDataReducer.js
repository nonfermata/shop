import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userDataSlice = createSlice({
    name: 'userSata',
    initialState,
    reducers: {
        set(state, action) {
            state[action.payload.key] = action.payload.value;
        }
    }
});

const { set } = userDataSlice.actions;
const userDataReducer = userDataSlice.reducer;

export const setUserData = (key, value) => set({ key, value });
export const getValueByKey = (key) => (state) => state.userData[key];

export default userDataReducer;
