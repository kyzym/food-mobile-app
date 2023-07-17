import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontIsLoaded, setFontIsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await loadAsync({
          'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
          playfair: require('./assets/fonts/PlayfairDisplay-Regular.ttf'),
          'playfair-bold': require('./assets/fonts/PlayfairDisplay-SemiBold.ttf'),
        });
        setFontIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    loadFonts();
  }, []);

  useEffect(() => {
    if (fontIsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontIsLoaded]);

  if (!fontIsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
