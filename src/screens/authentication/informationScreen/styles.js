import {StyleSheet} from 'react-native';
import {SCREEN} from '../../../constants';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingBottom: 10,
  },
  button: {
    width: SCREEN.WIDTH / 3,
  },
});
export default styles;
