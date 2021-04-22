import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Screen from '../../components/Screen/Screen';
import AppButton from '../../components/AppButton/AppButton';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeScreen({navigation}) {

  return (
    <Screen style={styles.container}>
      <HeaderScreen 
        renderRightBtn={() => (
          <TouchableOpacity onPress={() => navigation.navigate('home-detail')}>
            <MaterialCommunityIcons name="plus" color="white" size={30} />
          </TouchableOpacity>
        )}/>
      <Text style={styles.text}>Home Screen</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text : {
    margin : 100,
    fontSize : 30
  }
});

export default HomeScreen;