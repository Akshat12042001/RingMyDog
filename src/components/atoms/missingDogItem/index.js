import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import StyledText from '../styledText';
import {COLORS} from '../../../constants';
import {SharedStyles} from '../../../shared';

const MissingDogItem = ({title = '', value = ''}) => {
  return (
    <View style={styles.itemSubContainer}>
      <StyledText
        textStyle={styles.text}
        textAlign="center"
        color={COLORS.SECONDARY}
        containerStyle={SharedStyles.fullFlex}>
        {title}
      </StyledText>
      <StyledText textStyle={styles.text} color={COLORS.SECONDARY}>
        {' : '}
      </StyledText>
      <StyledText
        textAlign="left"
        color={COLORS.SECONDARY}
        containerStyle={SharedStyles.fullFlex}>
        {value}
      </StyledText>
    </View>
  );
};
export default MissingDogItem;
