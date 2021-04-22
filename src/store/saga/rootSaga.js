import {all, takeLatest} from 'redux-saga/effects';
import { loginMainSaga } from './loginSaga';

const rootSaga = function*() {
  yield all([loginMainSaga()]);
};

export default rootSaga;
