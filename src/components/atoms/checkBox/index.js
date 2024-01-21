import React from 'react';
import {COLORS} from '../../../constants';
import {Pressable, View} from 'react-native';
import StyledText from '../styledText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const CheckBox = ({isActive = false, onPress, title, textColor}) => {
  const borderColor = isActive ? COLORS.GREEN : COLORS.BLACK;
  return (
    <Pressable style={styles.root} onPress={onPress}>
      <Pressable
        style={[
          {
            borderColor: borderColor,
          },
          styles.container,
        ]}
        onPress={onPress}>
        {!!isActive && (
          <View style={styles.icon}>
            <Ionicons name="checkmark" size={20} color={COLORS.GREEN} />
          </View>
        )}
      </Pressable>
      <StyledText
        size={14}
        color={COLORS.SECONDARY}
        textStyle={{fontWeight: 'bold'}}>
        {title}
      </StyledText>
    </Pressable>
  );
};
export default CheckBox;
