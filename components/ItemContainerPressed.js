import { Pressable, StyleSheet, View } from 'react-native';
import { colors } from '../utils/constants';

export const ItemContainerPressed = ({ children, onPress }) => {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: colors.ripple }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={onPress}>
        {children}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    flex: 1,
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.7,
  },
});
