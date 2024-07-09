import {COLORS} from '../../../constants';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  titleText: {
    paddingHorizontal: 15,
    fontSize: 18,
    color: COLORS.SECONDARY,
  },
});

export default styles;
