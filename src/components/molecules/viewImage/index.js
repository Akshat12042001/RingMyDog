import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {SharedStyles} from '../../../shared';
import {StyledText} from '../../atoms';

const ViewImage = ({onViewPress = undefined, onClosePress = undefined}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onViewPress}>
      <StyledText
        textAlign="center"
        size={14}
        color={COLORS.PRIMARY}
        containerStyle={SharedStyles.fullFlex}>
        {'View image'}
      </StyledText>
      <TouchableOpacity
        style={styles.icon}
        onPress={onClosePress}
        hitSlop={{right: 10, left: 10, top: 10, bottom: 10}}>
        <Icon name={'close'} size={30} color={COLORS.RED} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
export default ViewImage;
