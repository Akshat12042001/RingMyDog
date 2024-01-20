import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from './src/navigation';
import {getStore, getPersistor} from './src/redux/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StyledText} from './src/components/atoms';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const store = getStore();
  const persistor = getPersistor();

  React.useEffect(() => {
    // store.dispatch(logoutRequest());
    setTimeout(SplashScreen.hide, 500);
  }, [false]);

  const onBeforeLift = () => {
    //Do some stuff that when redux has initialized
  };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate
          loading={<StyledText>Loading...</StyledText>}
          persistor={persistor}
          onBeforeLift={onBeforeLift}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
