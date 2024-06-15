import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import config from '../config';
import profile from '../stacks/profile';
import {CustomDrawer} from '../../components/molecules';
import {NAVIGATION} from '../../constants';
import common from '../stacks/common';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={config}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name={NAVIGATION.STACK.PROFILE} component={profile} />
      <Drawer.Screen name={NAVIGATION.STACK.COMMON} component={common} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
