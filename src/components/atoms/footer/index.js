import React, {Fragment} from 'react';
import {Image, View} from 'react-native';
import StyledText from '../styledText';
import {ASSETS, COLORS, STRINGS} from '../../../constants';
import styles from './styles';

const Footer = ({showTermsText = false}) => {
  return (
    <View style={styles.root}>
      {!!showTermsText && (
        <Fragment>
          <StyledText textAlign="center" size={14} color={COLORS.SECONDARY}>
            {STRINGS.PLACEHOLDERS.YOU_AGREE_TO_OUR}
          </StyledText>
          <StyledText textAlign="center" size={14} color={COLORS.RED}>
            {STRINGS.PLACEHOLDERS.TERMS_CONDITIONS}
          </StyledText>
        </Fragment>
      )}
      <View style={styles.container}>
        <Image source={ASSETS.COPYRIGHT} style={{height: 14, width: 14}} />
        <StyledText size={13} color={COLORS.SECONDARY}>
          {STRINGS.PLACEHOLDERS.RING_MY_DOG_LIMITED}
        </StyledText>
      </View>
    </View>
  );
};
export default Footer;
