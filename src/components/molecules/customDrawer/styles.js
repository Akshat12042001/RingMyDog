import {StyleSheet} from 'react-native';
import {COLORS, SCREEN_PADDING} from '../../../constants';

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLORS.BACKGROUND,
    paddingBottom: 30,
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '100%',
  },
  profileName: {
    marginHorizontal: 11,
    flex: 1,
  },
  container: {
    // marginTop: 44,
  },
  drawerContainer: {
    flexDirection: 'row',
    marginBottom: 18,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    flex: 1,
    paddingHorizontal: SCREEN_PADDING,
    alignItems: 'center',
  },
  logoutContainer: {
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  userImageContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userImage: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
  },
  image: {
    height: 25,
    width: 25,
  },
  dropdown: {
    position: 'absolute',
    top: 37,
    right: 20,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.WHITE,
  },
  optionsContainer: {
    paddingHorizontal: SCREEN_PADDING,
    marginTop: 22,
  },
});

export default styles;
