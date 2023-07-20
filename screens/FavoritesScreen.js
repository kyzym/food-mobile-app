import { StyleSheet, Text, View } from 'react-native';
import { MealList } from '../components';
import { MEALS } from '../data/dummy-data';
import { selectFavoriteMealIds } from '../store/redux/selectors/selectors';

export const FavoritesScreen = () => {
  const favoriteMealIds = selectFavoriteMealIds();

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites yet</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'playfair-bold',
    color: 'white',
  },
});
