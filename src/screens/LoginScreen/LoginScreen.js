import React from 'react';
import {View, Text , ActivityIndicator } from 'react-native';
import { useDispatch , useSelector } from 'react-redux';

import Screen from '../../components/Screen/Screen';
import {AppForm, AppFormField, SubmitBtn} from '../../components/Forms';

import Colors from '../../constants/Colors';
import styles from './LoginScreen.Style'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Yup from 'yup';
import { LoginRequested } from '../../store/actions/Actions';

const validateSchema = Yup.object().shape({
    username: Yup.string().min(6).required().label('Username'),
    password: Yup.string().min(4).required().label('Password'),
  }); 

function LoginScreen(props) {

    const dispatch = useDispatch();
    const loginHandler =({username, password}) => {
        dispatch(
            LoginRequested(username,password)
          );
      };

    const isLoading = useSelector(state => {
        //console.log('state.Login.isLoading ' + state.Login.isLoading);
        return state.Login.isLoading;
    });

    return(
        <Screen style={styles.container}>
            <MaterialCommunityIcons name="wechat" color="black" size={200} />
            <Text style={styles.title}>SIGN IN HERE</Text>

            <AppForm
                initialValues={{username: '', password: ''}}
                onSubmit={loginHandler}
                validationSchema={validateSchema}>
                <AppFormField
                    name="username"
                    placeholder="Username"
                    icon="account"
                    autoCapitalize="none"
                    autoCorrect={false}
                    textContentType="nickname"
                    width="75%"
                    ></AppFormField>
                <AppFormField
                    name="password"
                    placeholder="Password"
                    icon="lock"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"
                    width="75%"></AppFormField>
                {isLoading ? 
                (
                <ActivityIndicator size="large" color={'black'} />
                ) : (
                <SubmitBtn title="Sign in" color={'black'} width="75%" />
                )}    
            </AppForm>

        <View style={styles.registerContainer}>
            <Text style={{color: 'black'}}>Don't have an account?</Text>
            <Text style={{color: 'black'}} onPress={() => null}> SIGN UP </Text>
            </View>
        </Screen>
    );
}

export default LoginScreen;