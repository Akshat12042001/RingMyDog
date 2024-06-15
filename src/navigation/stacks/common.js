import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants';
import config from '../config';
import {
  DogBreederScreen,
  ResetSecurityPinScreen,
  ScanDogNoseScreen,
  TranferDogScreen,
} from '../../screens/common';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen
        name={NAVIGATION.COMMON.RESET_SECURITY_PIN_SCREEN}
        component={ResetSecurityPinScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.TRANSFER_DOG_SCREEN}
        component={TranferDogScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.SCAN_DOG_NOSE_SCREEN}
        component={ScanDogNoseScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.DOG_BREEDER_SCREEN}
        component={DogBreederScreen}
      />
    </Stack.Navigator>
  );
};
