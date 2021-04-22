import React, { useState } from 'react';
import {View, Text , ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';

import Screen from '../../components/Screen/Screen';
import {AppForm, AppFormField, SubmitBtn} from '../../components/Forms';

import Colors from '../../constants/Colors';
import styles from './LoginScreen.Style'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Yup from 'yup';
import { LoginRequested } from '../../store/actions/loginActions';

const validateSchema = Yup.object().shape({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().min(4).required().label('Password'),
  }); 

function LoginScreen(props) {

    const dispatch = useDispatch();
    
    const loginHandler =({email, password}) => {
        dispatch(
            LoginRequested(email,password)
          );
      };

    return(
        <Screen style={styles.container}>
            <MaterialCommunityIcons name="wechat" color="black" size={200} />
            <Text style={styles.title}>SIGN IN HERE</Text>

            <AppForm
                initialValues={{email: '', password: ''}}
                onSubmit={loginHandler}
                validationSchema={validateSchema}>
                <AppFormField
                    name="email"
                    placeholder="Email"
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
                <SubmitBtn title="Sign in" color={'black'} width="75%" />
            </AppForm>

        <View style={styles.registerContainer}>
            <Text style={{color: 'black'}}>Don't have an account?</Text>
            <Text style={{color: 'black'}} onPress={() => null}> SIGN UP </Text>
            </View>
        </Screen>
    );
}

export default LoginScreen;