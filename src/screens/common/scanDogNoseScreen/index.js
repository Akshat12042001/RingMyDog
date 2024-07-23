import React, {useEffect} from 'react';
import {
  Button,
  Footer,
  Header,
  ScreenContainer,
} from '../../../components/atoms';
import {View} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {NAVIGATION, SCREEN} from '../../../constants';
import {showSuccess} from '../../../utils/alerts';

const ScanDogNose = ({navigation}) => {
  const device = useCameraDevice('back');

  const onScanPress = () => {
    showSuccess('Your dog scanned successfully');
    setTimeout(() => {
      navigation.navigate(NAVIGATION.COMMON.PROFILE_MATCHED_SCREEN);
    }, 1500);
  };
  return (
    <ScreenContainer>
      <Header
        title={'DO YOU WANT TO USE OUR BIOMETRIC DOG SCANNER?'}
        isDrawerVisible
        onPress={() => navigation?.toggleDrawer()}
      />
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <View
          style={{
            height: SCREEN.HEIGHT / 3,
            width: SCREEN.WIDTH - 100,
            borderRadius: 34,
          }}>
          <Camera style={{flex: 1}} device={device} isActive={true} />
        </View>
        <Button
          title="Scan"
          containerStyles={{width: 100, marginTop: 20}}
          onPress={onScanPress}
        />
      </View>
      <Footer showTermsText />
    </ScreenContainer>
  );
};
export default ScanDogNose;
