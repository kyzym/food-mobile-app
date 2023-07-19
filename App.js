import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { loadAsync } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { CategoriesScreen } from './screens/CategoriesScreen';
import { MealDetailScreen } from './screens/MealDetailsScreen';
import { MealsOverviewScreen } from './screens/MealsOverviewScreen';
import { Button, Text } from 'react-native';

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
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3d2f25' },
          }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: 'All Categories' }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
