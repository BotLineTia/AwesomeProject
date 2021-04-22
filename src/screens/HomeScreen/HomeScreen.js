import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Screen from '../../components/Screen/Screen';
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
      <Text style={styles.text}>Click + to open HomeDetail </Text>
      <Text style={styles.text}>Click Setting to Logout</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text : {
    margin : 50,
    fontSize : 26
  }
});

export default HomeScreen;