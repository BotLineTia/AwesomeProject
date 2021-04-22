import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import SettingScreen from '../screens/SettingScreen/SettingScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{activeTintColor: '#3A86FF'}}>
    <Tab.Screen
      name="home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({size, color}) => (
          <Ionicons name="home" size={30} color={color} />
        ),
        title: 'Home',
      }}
    />
    <Tab.Screen
      name="settings"
      component={SettingScreen}
      options={{
        tabBarIcon: ({size, color}) => (
          <Ionicons name="settings" size={30} color={color} />
        ),
        title: 'Settings',
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
