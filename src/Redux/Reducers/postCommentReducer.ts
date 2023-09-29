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

export const postCommentReducer = createSlice({
  name: 'comments',
  initialState, // Sửa tại đây
  reducers: {
    runAddComment: (state: CommentState) => {
      state.isLoading = true;
    },

    addComment: (state: CommentState, action: PayloadAction<Comment>) => {
      state.isLoading = false;
      state.comments.push(action.payload);
    },
  },
});

export const {addComment, runAddComment} = postCommentReducer.actions;

export default postCommentReducer.reducer;
