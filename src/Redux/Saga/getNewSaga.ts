import {put, call} from 'redux-saga/effects';
import {New} from '../Type';
import {getNewsSuccess} from '../Reducers/getNewReducer';
import {getNew} from '../../Axios/getNew';

export default function* (action: any) {
  console.log('New saga -Action', action);
  const news: New[] = yield call(getNew); // Call API
  console.log('.>>>>>', news);
  yield put(getNewsSuccess(news));
}
