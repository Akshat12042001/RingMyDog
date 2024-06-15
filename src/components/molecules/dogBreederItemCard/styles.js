const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  imageContainer: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  itemContainer: {
    flex: 1,
    marginLeft: 10,
  },
  itemSubContainer: {
    flexDirection: 'row',
  },
  text: {
    fontWeight: 'bold',
  },
});
export default styles;
