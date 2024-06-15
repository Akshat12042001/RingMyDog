import {View, ScrollView, Image} from 'react-native';
import React, {useCallback} from 'react';
import styles from './styles';
import {getDrawerBasedOnUserType} from './customDrawer.config';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {logoutRequest} from '../../../redux/auth/auth.action';
import {showAlert, showSuccess} from '../../../utils/alerts';
import {DrawerItem, StyledText} from '../../atoms';
import {ASSETS, COLORS, ENUMS, NAVIGATION} from '../../../constants';

const CustomDrawer = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    navigation.closeDrawer();
    showAlert({
      title: 'Logout',
      message: 'Do you want to logout?',
      onSuccess: () => {
        dispatch(logoutRequest());
      },
      isConfirmationPopup: true,
    });
  }, []);

  const onItemPress = (value, title) => {
    switch (value) {
      case ENUMS.DRAWER_VALUES.LOGOUT:
        onLogout();
        break;
      case ENUMS.DRAWER_VALUES.EDIT_DOG_PROFILE:
        navigation.navigate(NAVIGATION.STACK.PROFILE, {
          screen: NAVIGATION.PROFILE.DOG_PROFILE,
          params: {
            title: 'EDIT DOG PROFILE',
          },
        });
        break;
      case ENUMS.DRAWER_VALUES.ADD_MORE_DOGS:
        navigation.navigate(NAVIGATION.STACK.PROFILE, {
          screen: NAVIGATION.PROFILE.DOG_PROFILE,
          params: {
            title: 'ADD MORE DOGS',
          },
        });
        break;
      case ENUMS.DRAWER_VALUES.DELETE_DOG_PROFILE:
        showAlert({
          title: 'Delete dog profile?',
          message: 'Do you want to Delete dog profile?',
          onSuccess: () => {
            setTimeout(() => {
              showSuccess('Your dog profile deleted successfully');
            }, 1000);
          },
          isConfirmationPopup: true,
        });
        break;
      case ENUMS.DRAWER_VALUES.DELETE_ACCOUNT:
        showAlert({
          title: 'Delete account?',
          message: 'Do you want to Delete account?',
          onSuccess: () => {
            dispatch(logoutRequest());
          },
          isConfirmationPopup: true,
        });
        break;
      case ENUMS.DRAWER_VALUES.RESET_PIN:
        navigation.navigate(NAVIGATION.STACK.COMMON, {
          screen: NAVIGATION.COMMON.RESET_SECURITY_PIN_SCREEN,
        });
        break;
      case ENUMS.DRAWER_VALUES.TRANSFER_DOG:
        navigation.navigate(NAVIGATION.STACK.COMMON, {
          screen: NAVIGATION.COMMON.TRANSFER_DOG_SCREEN,
        });
        break;
      case ENUMS.DRAWER_VALUES.SCAN_DOGE_NOSE:
        navigation.navigate(NAVIGATION.STACK.COMMON, {
          screen: NAVIGATION.COMMON.SCAN_DOG_NOSE_SCREEN,
        });
        break;
      case ENUMS.DRAWER_VALUES.DOG_BREEDER:
        navigation.navigate(NAVIGATION.STACK.COMMON, {
          screen: NAVIGATION.COMMON.DOG_BREEDER_SCREEN,
        });
        break;
    }
  };

  return (
    <View style={[styles.rootContainer, {paddingTop: insets?.top || 20}]}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image
            source={ASSETS.DOG_FACE}
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              marginBottom: 10,
            }}
          />
          <StyledText size={18} color={COLORS.SECONDARY}>
            Brownie
          </StyledText>
        </View>
        <View style={styles.optionsContainer}>
          {getDrawerBasedOnUserType().map((item, index) => (
            <DrawerItem
              key={`${item.title}${index}`}
              title={item.title}
              leftIcon={item.leftIcon}
              onPress={onItemPress.bind(this, item.value, item.title)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomDrawer;
