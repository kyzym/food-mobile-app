import { Text } from 'react-native';
// import { useWindowDimensions } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { ItemContainerPressed } from './ItemContainerPressed';
// import {Dimensions} from 'react-native'

export const CategoryGridTitle = ({ title, color, onPress }) => {
  // const {} = useWindowDimensions()

  return (
    <ItemContainerPressed onPress={onPress} style={styles.gridItem}>
      <View style={[styles.innerContainer, { backgroundColor: color }]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </ItemContainerPressed>
  );
};

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: 'playfair-bold',
  },
});
