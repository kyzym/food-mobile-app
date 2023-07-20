import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../utils/constants';

export const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 12,
    marginTop: 4,
    marginBottom: 8,
    borderBottomColor: colors.beige,
    borderBottomWidth: 2,
  },
  subtitle: {
    color: colors.beige,
    fontSize: 18,
    fontFamily: '',
    fontFamily: 'playfair-bold',
    textAlign: 'center',
  },
});
