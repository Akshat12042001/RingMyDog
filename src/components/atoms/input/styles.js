import {COLORS, FONTS, SCREEN, SCREEN_PADDING} from '../../../constants';
import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  main: {
    marginBottom: 10,
  },
  container: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderColor: COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FED990',
    borderRadius: 25,
    borderWidth: 1,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: FONTS.regular,
    textAlign: 'center',
    fontWeight: '500',
    paddingVertical: Platform.OS === 'ios' ? 15 : 10,
    color: COLORS.PRIMARY,
  },
  errorContainer: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 5,
    // position: 'absolute',
  },
  errorText: {
    fontSize: 14,
    marginLeft: 7,
    maxWidth: '95%',
    lineHeight: 18,
    color: COLORS.RED,
    fontFamily: FONTS.regular,
  },
  input: {
    position: 'absolute',
    width: SCREEN.WIDTH - SCREEN_PADDING * 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    paddingTop: 7,
    zIndex: -1,
  },
  placeHolderTextStyle: {
    marginTop: -8,
  },
  icon: {
    position: 'absolute',
    right: SCREEN_PADDING - 10,
  },
});
