import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../../utils/constants';

export const List = ({ data }) => {
  return data.map((item) => (
    <View key={item} style={styles.listItem}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: colors.beige,
  },
  itemText: {
    color: colors.brown900,
    textAlign: 'center',
  },
});
