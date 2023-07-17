import { StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { View } from 'react-native';
import { Text } from 'react-native';

export const MealsOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
