import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants';
import config from '../config';
import {
  BroadcastDogScreen,
  DogBreederScreen,
  MissingDogInformationScreen,
  MissingDogListScreen,
  ProfileSubmittedScreen,
  ResetSecurityPinScreen,
  ScanDogNoseScreen,
  ThanksMessageScreen,
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
        name={NAVIGATION.COMMON.MISSING_DOG_LIST_SCREEN}
        component={MissingDogListScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.DOG_BREEDER_SCREEN}
        component={DogBreederScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.BROADCAST_DOG_SCREEN}
        component={BroadcastDogScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.MISSING_DOG_INFO_SCREEN}
        component={MissingDogInformationScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.PROFILE_SUBMITTED_SCREEN}
        component={ProfileSubmittedScreen}
      />
      <Stack.Screen
        name={NAVIGATION.COMMON.THANKS_MESSAGE_SCREEN}
        component={ThanksMessageScreen}
      />
    </Stack.Navigator>
  );
};
