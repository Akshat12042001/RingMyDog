import React, {forwardRef} from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
import {COLORS} from '../../../../constants';

export default forwardRef(
  (
    {value, isFocused, marginLeft = false, error, autoFocus = true, ...props},
    ref,
  ) => {
    return (
      <View
        style={[
          styles.container,
          {
            borderColor: COLORS.BORDER,
            borderWidth: 1,
          },
        ]}>
        <TextInput
          {...props}
          ref={ref}
          value={value}
          keyboardType="numeric"
          style={[styles.textInput]}
          autoFocus={autoFocus}
        />
        {!value && <View style={styles.dummyView} />}
      </View>
    );
  },
);
