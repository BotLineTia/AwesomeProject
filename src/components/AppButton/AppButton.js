import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function AppButton({title, onPress, color = 'black', style}) {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: color, style}]}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  container: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
  },
});
