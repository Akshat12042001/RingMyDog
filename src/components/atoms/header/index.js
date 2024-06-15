import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {ASSETS, COLORS} from '../../../constants';
import StyledText from '../styledText';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SharedStyles} from '../../../shared';

const Header = ({title = '', isDrawerVisible = false, onPress = undefined}) => {
  return (
    <View style={styles.root}>
      {!!isDrawerVisible && (
        <TouchableOpacity
          onPress={onPress}
          hitSlop={SharedStyles.hitSlop10}
          style={{position: 'absolute', zIndex: 1, top: 10, left: 0}}>
          <Ionicons name="menu" size={40} color={COLORS.BACKGROUND} />
        </TouchableOpacity>
      )}
      <Image
        source={ASSETS.APP_LOGO}
        style={styles.imageStyles}
        resizeMode="contain"
      />
      <StyledText
        size={18}
        color={COLORS.SECONDARY}
        textStyle={styles.text}
        textAlign="center">
        {title}
      </StyledText>
      <View style={styles.dummyView} />
    </View>
  );
};
export default Header;
