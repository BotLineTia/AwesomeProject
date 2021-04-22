import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen/LoginScreen';
import AppNavigator from './AppNavigator';

const RootNavigator = () => {
  const isAuth = useSelector(state => {
    //console.log('state.Login.authen : ' + state.Login.authen);
    return state.Login.authen;
  });

  //console.log('is Auth : '+isAuth);
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
