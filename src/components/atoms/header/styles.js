import {StyleSheet} from 'react-native';
import {COLORS, SCREEN_PADDING} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    height: 200,
    width: 250,
  },
  text: {
    fontWeight: '700',
  },
  dummyView: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.SECONDARY,
    marginTop: SCREEN_PADDING,
  },
});
export default styles;
