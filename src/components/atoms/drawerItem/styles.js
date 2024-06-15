import {COLORS} from '../../../constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  rightIcon: {
    height: 25,
    width: 25,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  titleText: {
    paddingHorizontal: 15,
    fontSize: 18,
    color: COLORS.SECONDARY,
  },
});

export default styles;
