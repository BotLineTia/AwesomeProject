import { Alert } from 'react-native';
import { call, put, takeLatest } from 'redux-saga/effects';
//import axios from 'axios';
import { fetchLoginData } from '../../server/loginApi';

export function* loginMainSaga() {
  yield takeLatest('LOG_IN_REQUEST', loginSaga);
}

function* saveDataToStorage(data) {
  try {
      AsyncStorage.setItem(
          'userData',
          JSON.stringify({
              username: data.username,
              password: data.password }))  
      } catch(e) {
      console.log('error save to Storage');
  }
};

function* loginSaga(action) {
    const response = yield call(fetchLoginData);
    const resData = JSON.parse(JSON.stringify(response));
    
    const usernameAuth = String(resData.data[0].username);
    const passwordAuth = String(resData.data[0].password); 

    if (String(action.data.username) === usernameAuth)
    {
      if (String(action.data.password) === passwordAuth)
      {
        //console.log('loginSaga LOG_IN_SUCCESS');
        yield put({type: 'LOG_IN_SUCCESS'});
        saveDataToStorage(action.data);
      }
      else
      {
        const error = 'Password is incorrect'
        Alert.alert('Failed', error, [{ text: 'Ok', style: 'cancel' }] );
        //console.log('loginSaga LOG_IN_FAILURE');
        yield put({type: 'LOG_IN_FAILURE'});
      }
    } else {
      const error = 'Username is incorrect'
      Alert.alert('Failed', error, [{ text: 'Ok', style: 'cancel' }] );
      //console.log('loginSaga LOG_IN_FAILURE');
      yield put({type: 'LOG_IN_FAILURE'});
      
    }
}


