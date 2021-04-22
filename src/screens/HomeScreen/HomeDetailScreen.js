import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Screen from '../../components/Screen/Screen';
import AppButton from '../../components/AppButton/AppButton';
import HeaderScreen from '../../components/HeaderScreen/HeaderScreen';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function HomeDetailScreen({navigation}) {
  
  useEffect(() => {
    const parent = navigation.dangerouslyGetParent();
    parent.setOptions({
      tabBarVisible: false,
    });

    return () =>
      parent.setOptions({
        tabBarVisible: true,
      });
  }, []);

  return (
    <Screen style={styles.container}>
    <HeaderScreen 
      renderLeftBtn={() => (
        <TouchableOpacity onPress={() => navigation.navigate('home-screen')}>
          <MaterialCommunityIcons name="keyboard-backspace" color="white" size={30} />
        </TouchableOpacity>
      )}/>
    <Text style={styles.text}>Home Details Screeen</Text>
  </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  text : {
    margin : 100,
    fontSize : 30
  }
});

export default HomeDetailScreen;