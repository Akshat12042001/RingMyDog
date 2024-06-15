import {StyleSheet} from 'react-native';
import {COLORS, SCREEN_PADDING} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    height: 150,
    width: 200,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: '700',
    marginTop: SCREEN_PADDING,
  },
  dummyView: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.SECONDARY,
    marginTop: 10,
  },
});
export default styles;
