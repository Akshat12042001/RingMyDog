import {COLORS, SCREEN} from '../../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  imageDog: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  root: {
    alignItems: 'center',
    marginTop: 20,
  },
  itemSubContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
  },
  formik: {
    width: SCREEN.WIDTH - 40,
    marginTop: 20,
  },
  bottomDogImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  dogImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  bottomDataContainer: {
    marginTop: 10,
    flex: 1,
  },
  bottomTitleText: {
    fontWeight: '700',
  },
  bottomLine: {
    width: SCREEN.WIDTH - 40,
    marginVertical: 10,
    height: 1,
    backgroundColor: COLORS.SECONDARY,
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
