import { Image, StyleSheet, Text, View } from 'react-native';
import { ItemContainerPressed } from '../ItemContainerPressed';
import { useNavigation } from '@react-navigation/native';
import { MealDetails } from '../MealDetails';

export const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) => {
  const navigation = useNavigation();

  const selectMealItemHandler = () => {
    navigation.navigate('MealDetail', {
      mealId: id,
    });
  };

  return (
    <ItemContainerPressed onPress={selectMealItemHandler}>
      <View>
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
        </View>

        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </View>
    </ItemContainerPressed>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'playfair-bold',
    margin: 8,
  },
});
