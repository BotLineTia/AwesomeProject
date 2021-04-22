import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeDetailScreen from '../screens/HomeScreen/HomeDetailScreen';
import HomeUserScreen from '../screens/HomeScreen/HomeUserScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='home-screen' component={HomeScreen} />
      <Stack.Screen name='home-detail' component={HomeDetailScreen} />
      <Stack.Screen name='home-user' component={HomeUserScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
