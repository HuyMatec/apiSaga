import {call, put} from 'redux-saga/effects';
import {getCommentByIdSuccess} from '../Reducers/commentById.Reducer';
import {getCommentById} from '../../Axios/getComment';
import {Comment} from '../Type';

export function* fechCommentById(action: {type: string; payload: number}) {
  console.log('Action: ', action);
  const comment: Comment[] = yield call(
    getCommentById,
    action.payload.toString(),
  );
  yield put(getCommentByIdSuccess(comment));
}
