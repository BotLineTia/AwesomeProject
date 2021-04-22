import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  const isAuth = useSelector(state => {
    console.log('state.Login.token : ' + state.Login.token);
    return state.Login.token !== null ? true : false; 
  });

  console.log('is Auth : '+isAuth);
  return (
    ( !isAuth ? 
      <NavigationContainer>
        <LoginScreen/>
      </NavigationContainer>
      :
      <NavigationContainer>
        <AppNavigator/>
      </NavigationContainer>) 
  )
};

export default RootNavigator;
