import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants';
import config from '../config';
import {
  CreateFiveDigitSecurityPinScreen,
  InformationScreen,
  LoginScreen,
  SignUpScreen,
  TermsAndConditionsScreen,
} from '../../screens/authentication';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen
        name={NAVIGATION.AUTH.TERMS_AND_CONDITIONS_SCREEN}
        component={TermsAndConditionsScreen}
      />
      <Stack.Screen
        name={NAVIGATION.AUTH.INFORMATION_SCREEN}
        component={InformationScreen}
      />
      <Stack.Screen
        name={NAVIGATION.AUTH.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <Stack.Screen
        name={NAVIGATION.AUTH.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
};
