import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface mode {
  darkMode: boolean;
  isLoading: boolean;
}

const initialState: mode = {
  darkMode: false,
  isLoading: false,
};

export const appReducer = createSlice({
  name: 'appReducer',
  initialState,
  reducers: {
    changeAppMode: (state: mode) => {
      state.isLoading = true;
    },
    changeAppModeSuccess: (state: mode, action: PayloadAction<mode>) => {
      state.isLoading = false;
      state.darkMode = action.payload.darkMode;
    },
  },
});
export const {changeAppMode, changeAppModeSuccess} = appReducer.actions;

export default appReducer.reducer;
