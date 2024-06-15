import React from 'react';
import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../../constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BACKGROUND,
    borderRadius: 25,
    paddingVertical: 5,
    borderWidth: 1,
  },
  dropdown: {
    paddingLeft: 14,
    paddingRight: 20,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.WHITE,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color: COLORS.LIGHT_YELLOW,
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: COLORS.SECONDARY,
    textAlign: 'center',
  },
  iconStyle: {
    width: 28,
    height: 28,
    tintColor: COLORS.SECONDARY,
    position: 'absolute',
    right: 0,
  },
  listContainerStyles: {
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 1,
    overflow: 'hidden',
  },
  erroContainer: {
    fontSize: 14,
    marginLeft: 10,
    maxWidth: '95%',
    lineHeight: 18,
    color: COLORS.RED,
    fontFamily: FONTS.regular,
    marginBottom: 10,
  },
});
export default styles;
