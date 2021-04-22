import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.Background_color,
      width: '100%',
      flex: 1,
      alignItems: 'center',
      
    },
    title: {
      fontSize: 40,
      color: 'black'
    },
    registerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default styles;