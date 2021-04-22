import { put, takeLatest } from 'redux-saga/effects';

export function* logoutMainSaga() {
  yield takeLatest('LOG_OUT_REQUEST', logoutSaga);
}

function* logoutSaga() {
    AsyncStorage.removeItem('userData');
    console.log('loginSaga LOG_OUT');
    yield put({type: 'LOG_OUT'});
}


