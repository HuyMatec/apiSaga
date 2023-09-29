import {combineReducers} from '@reduxjs/toolkit';
import appReducer from './appReducer';
import commentsReducer from './commentsReducer';
import commentByIdReducer from './commentById.Reducer';
import postCommentReducer from './postCommentReducer';
import getNewReducer from './getNewReducer';

const rootReducer = combineReducers({
  appReducer: appReducer,
  commentReducer: commentsReducer,
  commentByIdReducer: commentByIdReducer,
  postCommentReducer: postCommentReducer,
  getNewReducer: getNewReducer,
});

export default rootReducer;
