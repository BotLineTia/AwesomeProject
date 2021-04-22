import {all, takeLatest} from 'redux-saga/effects';
import { loginMainSaga } from './loginSaga';
import { logoutMainSaga } from './logoutSaga';

const rootSaga = function*() {
  yield all([loginMainSaga()]);
  yield all([logoutMainSaga()]);
};

export default rootSaga;
