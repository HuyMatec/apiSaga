import {put, call} from 'redux-saga/effects';
import {getComments, getCommentsSuccess} from '../Reducers/commentsReducer';
import {Comment} from '../Type';
import {getComment} from '../../Axios/getComment';

export default function* (action: any) {
  console.log('Comment saga -Action', action);
  const comments: Comment[] = yield call(getComment); // Call API
  yield put(getCommentsSuccess(comments));
}
