import {SCREEN} from '../../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    flex: 1,
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
