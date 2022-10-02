import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { login } from './service';
import { ISlice } from './type';

const initialState: ISlice = {
    isLoggedIn: false,
    isFetching: false
};

export const doLogin = createAsyncThunk(
    'login/doLogin',
    async () => {
        const response = await login();
        return response.data;
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(doLogin.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(doLogin.fulfilled, (state, action: PayloadAction<boolean>) => {
                state.isFetching = false;
                state.isLoggedIn = action.payload
        });
    },
});

export const { loginSuccess } = loginSlice.actions;
export const selectIsFetching = (state: RootState) => state.login.isFetching;
export const selectIsLoggedIn = (state: RootState) => state.login.isLoggedIn;
export default loginSlice.reducer;