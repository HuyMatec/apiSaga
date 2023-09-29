import {RootState} from '../store';

export const darkMode = (state: RootState) => state.appReducer.darkMode;

export const comment = (state: RootState) => state.commentReducer.comments;
export const iSLoading = (state: RootState) => state.commentReducer.isLoading;
export const commentById = (state: RootState) =>
  state.commentByIdReducer.comments;
export const postComments = (state: RootState) =>
  state.postCommentReducer.comments;
export const loadingPost = (state: RootState) =>
  state.postCommentReducer.isLoading;
