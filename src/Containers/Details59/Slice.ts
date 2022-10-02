import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { getEmployeeList } from './service';
import { IEmployees, ISlice } from './type';

const initialState: ISlice = {
    employList: [],
    isFetching: false
};

export const getEmployees = createAsyncThunk(
    'employees/getList',
    async () => {
      const response = await getEmployeeList();
      return response.data;
    }
);

export const employeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
    //   incrementByAmount: (state, action: PayloadAction<number>) => {
    //     state.value += action.payload;
    //   },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getEmployees.pending, (state) => {
          state.isFetching = true;
        })
        .addCase(getEmployees.fulfilled, (state, action: PayloadAction<IEmployees[]>) => {
          state.isFetching = false;
          state.employList = action.payload;
        });
    },
});
  
//   export const { increment, decrement, incrementByAmount } = counterSlice.actions;
  
export const selectList = (state: RootState) => state.employees.employList;
export const selectIsFetching = (state: RootState) => state.employees.isFetching;

export default employeeSlice.reducer;
  