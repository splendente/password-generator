import React from 'react';
import { useState, useEffect } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Theme } from 'tamagui';
import type { ThemeName } from 'tamagui';

import { SubmitButton } from '@/components/button';
import { LengthField } from '@/components/length-field';
import { PasswordField } from '@/components/password-field';
import { CheckboxWithLabel } from '@/components/checkbox';
import { ToggleSwitch } from '@/components/switch';

import { useGeneratePassword } from '@/hooks/useGeneratePassword';

const storybookEnabled = process.env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true';

const Index = () => {
  const systemTheme = useColorScheme();

  const [length, setLength] = useState(12);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const [theme, setTheme] = useState<ThemeName>(systemTheme ? systemTheme : 'light');

  const { password, updatePassword } = useGeneratePassword();

  /**
   * onPress handler for the SubmitButton component
   */
  const onPress = () => {
    // Call the updatePassword function with the current state
    updatePassword(length, lowercase, uppercase, number, symbol);
  };

  useEffect(() => {
    // Call the updatePassword function with the current state
    updatePassword(length, lowercase, uppercase, number, symbol);
  }, []);

  // If the storybookEnabled flag is set to true, render the Storybook UI
  // if (storybookEnabled) {
  //   const StorybookUI = require('../.storybook').default;

  //   return (
  //     <View style={{ flex: 1 }}>
  //       <StorybookUI />
  //     </View>
  //   );
  // }

  return (
    <Theme name={theme}>
      <SafeAreaView>
        <View style={styles.wrapper}>
          <ToggleSwitch onCheckedChange={setTheme} />
          <PasswordField size="$4" value={password} />
          <CheckboxWithLabel
            id="lowercase"
            label="英小文字"
            size="$6"
            checked={lowercase}
            onCheckedChange={setLowercase}
          />
          <CheckboxWithLabel
            id="uppercase"
            label="英大文字"
            size="$6"
            checked={uppercase}
            onCheckedChange={setUppercase}
          />
          <CheckboxWithLabel
            id="number"
            label="数値"
            size="$6"
            checked={number}
            onCheckedChange={setNumber}
          />
          <CheckboxWithLabel
            id="symbol"
            label="記号"
            size="$6"
            checked={symbol}
            onCheckedChange={setSymbol}
          />
          <LengthField length={length} setLength={setLength} />
          <SubmitButton onPress={onPress} text="パスワードを生成する" />
        </View>
      </SafeAreaView>
    </Theme>
  );
};

export default Index;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    gap: 16,
  },
});
