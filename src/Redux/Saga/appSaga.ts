import {put, call} from 'redux-saga/effects';
import {
  changeAppMode,
  changeAppModeSuccess,
  mode,
} from '../Reducers/appReducer';

export default function* updateMode(action: {type: string; payload: mode}) {
  console.log('action : ', action);
  yield put(changeAppModeSuccess(action.payload));
}
