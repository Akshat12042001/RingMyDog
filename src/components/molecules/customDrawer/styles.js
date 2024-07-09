import {StyleSheet} from 'react-native';
import {COLORS, SCREEN_PADDING} from '../../../constants';

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.BACKGROUND,
    paddingBottom: 30,
    // flex: 1,
  },
  optionsContainer: {
    paddingHorizontal: SCREEN_PADDING,
    marginTop: 22,
  },
  imageDog: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
