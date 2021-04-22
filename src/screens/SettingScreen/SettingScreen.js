import React from 'react';
import { View , Text , TouchableOpacity } from 'react-native';

import Screen from '../../components/Screen/Screen';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './SettingScreen.Style';

import { useDispatch } from 'react-redux';

import { Logout } from '../../store/actions/Actions';

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
          <TouchableOpacity onPress={() => {}}>
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