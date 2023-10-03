import { createSlice } from '@reduxjs/toolkit';

const captchaSlice = createSlice({
    name: 'captcha',
    initialState: { value: '' },
    reducers: {
        modify(state, action) {
            state.value = action.payload;
        }
    }
});

const { modify } = captchaSlice.actions;
const captchaReducer = captchaSlice.reducer;

export const modifyCaptcha = (data) => modify(data);
export const getCaptcha = () => (state) => state.captcha.value;

export default captchaReducer;
