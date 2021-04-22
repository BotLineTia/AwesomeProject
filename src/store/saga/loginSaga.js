import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import axioss from 'axios';
import { fetchLoginData } from '../../server/api';

export function* loginMainSaga() {
  yield takeLatest('LOG_IN_REQUEST', loginSaga);
}

function* saveDataToStorage(data) {
  try {
      AsyncStorage.setItem(
          'userData',
          JSON.stringify({
              token: data.token,
              userId: data.userId }))  
      } catch(e) {
      console.log('error save to Storage');
  }
};

function* loginSaga(action) {
    const response = yield call( fetchLoginData , action);
    const resData = response.json();
    console.log('-------');
    console.log(action.data.password);
    //console.log(password);
    if (!response.ok)
    {
      console.log('loginSaga LOG_IN_FAILURE');
      yield put({type: 'LOG_IN_FAILURE'});
    } else {
      const Token = resData.idToken;
      console.log('loginSaga LOG_IN_SUCCESS');
      yield put({type: 'LOG_IN_SUCCESS'}, Token);
    }
}


