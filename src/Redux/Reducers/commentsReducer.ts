import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Comment {
  id: string;
  createdAt: string;
  name: string;
  avatar: string;
}

interface CommentState {
  comments: Comment[];
  isLoading: boolean;
}

const initialState: CommentState = {
  comments: [],
  isLoading: false,
};

const commentsReducer = createSlice({
  name: 'comments',
  initialState, // Sửa tại đây
  reducers: {
    getComments: (state: CommentState) => {
      state.isLoading = true;
    },
    getCommentsSuccess: (
      state: CommentState,
      action: PayloadAction<Comment[]>,
    ) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
  },
});

export const {getComments, getCommentsSuccess} = commentsReducer.actions;

export default commentsReducer.reducer;
