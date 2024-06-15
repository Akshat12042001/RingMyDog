import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants';
import config from '../config';
import {
  CreateFiveDigitSecurityPinScreen,
  DogProfileScreen,
  YourProfileScreen,
} from '../../screens/profile';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen
        name={NAVIGATION.PROFILE.CREATE_FIVE_DIGIT_SECURITY_PIN_SCREEN}
        component={CreateFiveDigitSecurityPinScreen}
      />
      <Stack.Screen
        name={NAVIGATION.PROFILE.DOG_PROFILE}
        component={DogProfileScreen}
      />
      <Stack.Screen
        name={NAVIGATION.PROFILE.YOUR_PROFILE_SCREEN}
        component={YourProfileScreen}
      />
    </Stack.Navigator>
  );
};
