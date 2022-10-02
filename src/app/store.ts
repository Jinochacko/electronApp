import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import employeeReducer from '../Containers/Employees/Slice';
import loginReducer from '../Containers/Login/Slice';
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  counter: counterReducer,
  employees: employeeReducer,
  login: loginReducer
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
