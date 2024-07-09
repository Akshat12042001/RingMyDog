const {StyleSheet} = require('react-native');
const {SCREEN} = require('../../../constants');

const styles = StyleSheet.create({
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
  root: {
    marginTop: 100,
  },
  text: {
    fontWeight: '700',
  },
});
export default styles;
