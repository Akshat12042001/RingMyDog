import {StyleSheet} from 'react-native';
import {COLORS} from '../../../constants';

const styles = StyleSheet.create({
  root: {
    borderWidth: 1,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.SECONDARY,
    borderRadius: 10,
  },
  icon: {
    zIndex: 1,
    position: 'absolute',
    right: 10,
  },
});
export default styles;
