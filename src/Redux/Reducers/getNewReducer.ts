import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {New} from '../Type';

interface NewState {
  news: New[];
  isLoading: boolean;
}

const initialState: NewState = {
  news: [],
  isLoading: false,
};

const newsReducer = createSlice({
  name: 'News',
  initialState, // Sửa tại đây
  reducers: {
    getNews: (state: NewState) => {
      state.isLoading = true;
    },
    getNewsSuccess: (state: NewState, action: PayloadAction<New[]>) => {
      state.isLoading = false;
      state.news = action.payload;
    },
  },
});

export const {getNews, getNewsSuccess} = newsReducer.actions;

export default newsReducer.reducer;
