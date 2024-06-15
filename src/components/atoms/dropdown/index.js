import React, {Fragment} from 'react';
import {View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS, FONTS} from '../../../constants';
import styles from './styles';
// import {ArrowDown} from '../../svg';
import StyledText from '../styledText';
import Input from '../input';

const DropdownComponent = ({
  onChange = undefined,
  placeholder = '',
  value = '',
  data = [],
  error = '',
  containerStyle = {},
  search = true,
}) => {
  return (
    <Fragment>
      <View
        style={[
          styles.container,
          {
            borderColor: !!error ? COLORS.RED : COLORS.BORDER,
            marginBottom: !!error ? 5 : 15,
          },
          containerStyle,
        ]}>
        <Dropdown
          style={[styles.dropdown]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          dropdownPosition="bottom"
          data={data}
          labelField="label"
          valueField="value"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          fontFamily={FONTS.regular}
          maxHeight={250}
          containerStyle={styles.listContainerStyles}
          itemTextStyle={styles.selectedTextStyle}
        />
      </View>
      {!!error && (
        <View>
          <StyledText size={14} textStyle={styles.erroContainer}>
            {error}
          </StyledText>
        </View>
      )}
    </Fragment>
  );
};

export default DropdownComponent;
