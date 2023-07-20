import { useLayoutEffect } from 'react';
import { MealList } from '../components';
import { CATEGORIES, MEALS } from '../data/dummy-data';

export const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, catId]);

  return <MealList items={displayedMeals} />;
};
