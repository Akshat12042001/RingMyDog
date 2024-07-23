import {StyleSheet} from 'react-native';
import {COLORS, SCREEN, SCREEN_PADDING} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 0,
    justifyContent: 'center',
    marginHorizontal: SCREEN_PADDING,
  },
  container: {
    margin: 0,
    paddingHorizontal: SCREEN_PADDING,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 15,
  },
  bottomDataContainer: {
    marginTop: 10,
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
  text: {
    fontWeight: 'bold',
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
