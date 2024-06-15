// import React, {
//   useState,
//   useCallback,
//   useMemo,
//   useEffect,
//   forwardRef,
// } from 'react';
// import {TextInput, View, Text, Pressable} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import CountryPicker from 'react-native-country-picker-modal';
// import {COLORS} from '../../../constants';
// import styles from './styles';
// import StyledText from '../styledText';

// export default forwardRef(
//   (
//     {
//       error,
//       editable = true,
//       isValid = false,
//       onPress,
//       containerStyle = {},
//       isPhoneNumber = false,
//       onCallingCodeChange,
//       userCountry = 'GB',
//       leftIcon = null,
//       getCountryCode,
//       rightIcon,
//       ...props
//     },
//     ref,
//   ) => {
//     const [isFocused, setIsFocused] = useState(false);
//     const [country, setCountry] = useState(userCountry);

//     const onSelect = country => {
//       console.log({country});
//       setCountry(country.cca2);
//       onCallingCodeChange?.(country.callingCode[0]);
//     };

//     const inputStyle = useMemo(
//       () => ({
//         marginTop: props?.multiline ? 10 : 0,
//         color: !!error ? COLORS.RED : COLORS.BLACK,
//       }),
//       [props?.multiline, props?.multiline],
//     );

//     let placeholderTextColor = isFocused ? COLORS.BLUE : COLORS.BLACK;
//     let borderBottomColor;
//     if (isFocused) borderBottomColor = COLORS.BLACK;
//     if (error) borderBottomColor = COLORS.RED;
//     if (isValid) borderBottomColor = COLORS.BLACK;

//     const onFocusHandler = useCallback(() => {
//       setIsFocused(true);
//       props?.onFocus?.();
//     }, [props?.onFocus]);

//     const onBlurHandler = useCallback(
//       e => {
//         setIsFocused(false);
//         props?.onBlur?.(e);
//       },
//       [props?.onBlur],
//     );

//     return (
//       <Pressable style={styles.main} onPress={editable ? undefined : onPress}>
//         <View
//           pointerEvents={!editable ? 'none' : undefined}
//           style={[styles.container, {borderBottomColor}, containerStyle]}>
//           {!!leftIcon && <View style={styles.leftIconStyle}>{leftIcon}</View>}
//           <View style={styles.subContainer}>
//             {!!props?.value && (
//               <StyledText containerStyle={styles.value} color={COLORS.BLACK}>
//                 +44 - (0)
//               </StyledText>
//             )}
//             <TextInput
//               ref={ref}
//               {...props}
//               editable={editable}
//               onBlur={onBlurHandler}
//               onFocus={onFocusHandler}
//               placeholderTextColor={COLORS.BLACK}
//               style={[
//                 styles.textInput,
//                 props?.style,
//                 inputStyle,
//                 {textAlign: !!props?.value ? 'left' : 'center'},
//               ]}
//               maxLength={10}
//               keyboardType="number-pad"
//             />
//           </View>
//           {rightIcon}
//         </View>
//         {!!error && (
//           <View style={styles.errorContainer}>
//             <Icon size={15} name="alert-circle" color={COLORS.RED} />
//             <Text style={styles.errorText}>{error}</Text>
//           </View>
//         )}
//       </Pressable>
//     );
//   },
// );

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
          {!!props?.value && (
            <StyledText containerStyle={styles.value} color={COLORS.BLACK}>
              +44 - (0)
            </StyledText>
          )}
          <TextInput
            ref={ref}
            {...props}
            placeholder=""
            autoCapitalize="none"
            editable={editable}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            secureTextEntry={isSecure}
            keyboardType="number-pad"
            maxLength={10}
            style={[
              styles.textInput,
              props?.style,
              inputStyle,
              // {marginHorizontal: noMarginHorizontal ? 0 : SCREEN_PADDING},
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
