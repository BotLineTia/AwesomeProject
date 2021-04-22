import React, { useState } from 'react';

import RootNavigator from './src/navigation/RootNavigator';
import SettingScreen from './src/screens/SettingScreen/SettingScreen';

import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import store from './src/store/store';


export default function App() {
  console.log('reloaded');
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
    
  );
}
