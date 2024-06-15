import React, {useState, useCallback, useMemo, forwardRef} from 'react';
import {TextInput, View, Text, Pressable} from 'react-native';
import {COLORS, SCREEN_PADDING} from '../../../constants';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import StyledText from '../styledText';
import {SharedStyles} from '../../../shared';

export default forwardRef(
  (
    {
      error,
      isPassword = false,
      // leftIcon = null,
      rightIcon = null,
      editable = true,
      isValid = false,
      onPress,
      containerStyle = {},
      isPhoneNumber = false,
      color = false,
      borderBottomWidth = true,
      noMarginHorizontal = false,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isSecure, setIsSecure] = useState(isPassword);

    const inputStyle = useMemo(
      () => ({
        marginTop: props?.multiline ? 10 : 0,
        color: COLORS.SECONDARY,
      }),
      [props?.multiline, props?.multiline],
    );

    const onFocusHandler = useCallback(() => {
      setIsFocused(true);
      props?.onFocus?.();
    }, [props?.onFocus]);

    const onBlurHandler = useCallback(
      e => {
        setIsFocused(false);
        props?.onBlur?.(e);
      },
      [props?.onBlur],
    );

    return (
      <Pressable style={styles.main} onPress={editable ? undefined : onPress}>
        <View
          pointerEvents={!editable ? 'none' : undefined}
          style={[
            styles.container,
            {
              borderColor: !!error ? COLORS.RED : COLORS.BORDER,
            },
            containerStyle,
          ]}>
          <TextInput
            ref={ref}
            {...props}
            placeholder=""
            autoCapitalize="none"
            editable={editable}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            secureTextEntry={isSecure}
            style={[
              styles.textInput,
              props?.style,
              inputStyle,
              {marginHorizontal: noMarginHorizontal ? 0 : SCREEN_PADDING},
            ]}
          />
          <View style={styles.input}>
            <StyledText
              color={!!color ? color : COLORS.LIGHT_YELLOW}
              textAlign="center"
              containerStyle={styles.placeHolderTextStyle}>
              {!!props?.value ? '' : props?.placeholder}
            </StyledText>
          </View>
          <View hitSlop={SharedStyles.hitSlop20} style={styles.icon}>
            {!!isPassword && (
              <Icon
                size={22}
                name={!isSecure ? 'eye' : 'eye-off'}
                onPress={() => setIsSecure(!isSecure)}
                color={COLORS.BLACK}
              />
            )}
            {rightIcon}
          </View>
        </View>
        <View style={styles.errorContainer}>
          {!!error && <Text style={styles.errorText}>{error}</Text>}
        </View>
      </Pressable>
    );
  },
);
