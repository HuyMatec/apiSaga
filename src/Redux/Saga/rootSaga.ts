import {all, takeEvery, takeLatest} from 'redux-saga/effects';
import updateMode from './appSaga';
import {changeAppMode} from '../Reducers/appReducer';
import commentSaga from './commentSaga';
import {getComments} from '../Reducers/commentsReducer';
import {getCommentById} from '../Reducers/commentById.Reducer';
import {fechCommentById} from './commentByIdSaga';
import {addComment, runAddComment} from '../Reducers/postCommentReducer';
import {postCommentAsync} from './postSaga';
import {getNews} from '../Reducers/getNewReducer';
import getNewSaga from './getNewSaga';

export default function* appSaga() {
  yield all([
    takeEvery(getNews.type, getNewSaga),
    takeLatest(runAddComment.type, postCommentAsync),
    takeEvery(changeAppMode.type, updateMode),
    takeEvery(getComments.type, commentSaga),
    takeEvery(getCommentById.type, fechCommentById),
  ]);
}
