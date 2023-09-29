import {put, call} from 'redux-saga/effects';
import {Comment} from '../Type';
import {postComment} from '../../Axios/postComment';
import {addComment} from '../Reducers/postCommentReducer';
import {useAppSelector} from '../store';

export function* postCommentAsync(action: {type: string; payload: Comment}) {
  try {
    const response: Comment = yield call(postComment, action.payload);
    yield put(addComment(response));
  } catch (error) {
    console.error('Error posting comment:', error);
  }
}
