import {StyleSheet} from 'react-native';
import {SCREEN} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    height: SCREEN.HEIGHT * 2,
  },
  container: {
    marginTop: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  backButton: {
    width: SCREEN.WIDTH / 3,
  },
  dummyView: {
    width: 20,
  },
});

export default styles;
