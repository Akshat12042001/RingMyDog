import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NAVIGATION} from '../../constants';
import config from '../config';
import {TermsAndConditionsScreen} from '../../screens/authentication';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={config}>
      <Stack.Screen
        name={NAVIGATION.AUTH.TERMS_AND_CONDITIONS_SCREEN}
        component={TermsAndConditionsScreen}
      />
    </Stack.Navigator>
  );
};
