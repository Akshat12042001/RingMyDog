import React from 'react';
import {Image, View} from 'react-native';
import {ASSETS, COLORS} from '../../../constants';
import StyledText from '../styledText';
import styles from './styles';

const Header = ({title = ''}) => {
  return (
    <View style={styles.root}>
      <Image
        source={ASSETS.APP_LOGO}
        style={styles.imageStyles}
        resizeMode="contain"
      />
      <StyledText
        size={22}
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
