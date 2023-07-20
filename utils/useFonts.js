import { loadAsync } from 'expo-font';
import { useEffect, useState } from 'react';

export const useCustomFonts = () => {
  const [fontIsLoaded, setFontIsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await loadAsync({
          'roboto-regular': require('../assets/fonts/Roboto-Regular.ttf'),
          'roboto-bold': require('../assets/fonts/Roboto-Bold.ttf'),
          playfair: require('../assets/fonts/PlayfairDisplay-Regular.ttf'),
          'playfair-bold': require('../assets/fonts/PlayfairDisplay-SemiBold.ttf'),
        });
        setFontIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    loadFonts();
  }, []);

  return fontIsLoaded;
};
