import React from 'react';
import {TouchableOpacity} from 'react-native';
import StyledText from '../styledText';
import {COLORS} from '../../../constants';
import styles from './styles';

const Button = ({
  title = '',
  containerStyles = {},
  onPress,
  isDisabled = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.root,
        containerStyles,
        {backgroundColor: isDisabled ? COLORS.GREY : COLORS.SECONDARY},
      ]}
      onPress={isDisabled ? undefined : onPress}>
      <StyledText color={COLORS.WHITE} textStyle={{fontWeight: '500'}}>
        {title}
      </StyledText>
    </TouchableOpacity>
  );
};
export default Button;
