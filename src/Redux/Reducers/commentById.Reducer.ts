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

const commentByIdReducer = createSlice({
  name: 'commentById',
  initialState,
  reducers: {
    getCommentById: (state: CommentState) => {
      state.isLoading = true;
    },
    getCommentByIdSuccess: (
      state: CommentState,
      action: PayloadAction<Comment[]>,
    ) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
  },
});

export const {getCommentById, getCommentByIdSuccess} =
  commentByIdReducer.actions;

export default commentByIdReducer.reducer;
