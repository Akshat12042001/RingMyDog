import {SCREEN} from '../../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 20,
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
  tranferText: {
    marginBottom: 10,
    fontWeight: '700',
  },
});

export default styles;
