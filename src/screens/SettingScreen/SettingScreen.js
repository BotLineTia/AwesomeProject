import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';

import Screen from '../../components/Screen/Screen';
import AppButton from '../../components/AppButton/AppButton';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import styles from './SettingScreen.Style';

import { useDispatch } from 'react-redux';

import { Logout } from '../../store/actions/logoutAction';

function SettingScreen(props) {

  const dispatch = useDispatch();

  const LogoutHandler = () => {
      dispatch(
          Logout()
        );
    };
  return (
    <Screen>
      <HeaderScreen 
        renderLeftBtn={() => (
          <TouchableOpacity onPress={() => navigation.navigate('home')}>
            <MaterialCommunityIcons name="keyboard-backspace" color="white" size={30} />
          </TouchableOpacity>
        )}/>
        <View style={styles.container}>
          <TouchableOpacity style={styles.button} onPress={LogoutHandler}>
            <Text>LOG OUT</Text>
          </TouchableOpacity>
        </View>
    </Screen>
              
  );
}

export default SettingScreen;