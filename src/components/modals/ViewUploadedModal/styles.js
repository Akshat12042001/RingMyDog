import {StyleSheet} from 'react-native';
import {COLORS, SCREEN} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    height: SCREEN.HEIGHT / 2,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  loader: {
    position: 'absolute',
    right: SCREEN.WIDTH / 3 + 40,
  },
});
export default styles;
