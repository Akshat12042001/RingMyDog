import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticationStack from './stacks/authentication';
import {NavigationService} from '../services';
import {createStackNavigator} from '@react-navigation/stack';
import config from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Linking, Platform} from 'react-native';
import {connect} from 'react-redux';
import DrawerNavigator from './drawer/drawerNavigator';
import {NAVIGATION} from '../constants';

const Stack = createStackNavigator();

const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: __DEV__ ? false : true,
      initialState: undefined,
    };
  }

  componentDidMount() {
    if (!this.state.isReady) {
      this.restoreState();
    }
  }

  restoreState = async () => {
    try {
      const initialUrl = await Linking.getInitialURL();

      if (Platform.OS !== 'web' && initialUrl == null) {
        // Only restore state if there's no deep link and we're not on web
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;

        if (state !== undefined) {
          this.setState({initialState: state});
        }
      }
    } finally {
      this.setState({isReady: true});
    }
  };

  render() {
    console.log(this.props.isLoggedIn);
    const {initialState, isReady} = this.state;
    if (!isReady) return null;
    return (
      <NavigationContainer
        initialState={initialState}
        onStateChange={state =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
        ref={ref => NavigationService.setNavigatorRef(ref)}>
        <Stack.Navigator screenOptions={config}>
          <Stack.Screen
            name={NAVIGATION.STACK.AUTH}
            component={
              !!this.props?.isLoggedIn ? DrawerNavigator : AuthenticationStack
            }
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state?.auth?.isLoggedIn,
});
export default connect(mapStateToProps)(AppNavigator);
