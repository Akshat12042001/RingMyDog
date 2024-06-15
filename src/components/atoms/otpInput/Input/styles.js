import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../constants';

const SIZE = 50;

export default StyleSheet.create({
  container: {
    width: SIZE,
    overflow: 'hidden',
    marginHorizontal: 3,
    alignItems: 'center',
    aspectRatio: 40 / 44,
    borderRadius: SIZE / 5,
    justifyContent: 'center',
    backgroundColor: COLORS.BACKGROUND,
  },
  textInput: {
    fontSize: 20,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: COLORS.SECONDARY,
  },
  dummyView: {
    borderBottomWidth: 1,
    width: 8,
    position: 'absolute',
  },
});
