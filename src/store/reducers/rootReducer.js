import {combineReducers} from 'redux';

import {loginReducer} from './Reducer';

export default combineReducers({
  Login: loginReducer
});
