import { useSelector } from 'react-redux';

export const selectFavoriteMealIds = () =>
  useSelector((state) => state.favoriteMeals.ids);
