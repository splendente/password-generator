import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useEffect, useState } from 'react';
import { Slot } from 'expo-router';
import { TamaguiProvider } from 'tamagui';
import appConfig from '../tamagui.config';
import '@/assets/css/global.css';
import { Theme, Stack } from 'tamagui';
import type { ThemeName } from 'tamagui';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const ThemeContext = createContext(null);

export default function RootLayout() {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState<ThemeName>(systemTheme ? systemTheme : 'light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={appConfig}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Theme name={theme}>
          <Stack
            flex={1}
            alignItems="center"
            justifyContent="center"
            theme="blue"
            backgroundColor={theme === 'dark' ? '#2a425e' : '#fff'}
          >
            <Slot />
          </Stack>
        </Theme>
      </ThemeContext.Provider>
    </TamaguiProvider>
  );
}
