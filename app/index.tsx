import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'tamagui';

import { ThemeContext } from './_layout';

import { SubmitButton } from '@/components/button';
import { LengthField } from '@/components/length-field';
import { PasswordField } from '@/components/password-field';
import { CheckboxWithLabel } from '@/components/checkbox';
import { ToggleSwitch } from '@/components/switch';

import { useGeneratePassword } from '@/hooks/useGeneratePassword';

const Index = () => {
  const [length, setLength] = useState(12);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);

  const { password, updatePassword } = useGeneratePassword();

  const { toggleTheme } = useContext(ThemeContext);

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

  return (
    <SafeAreaView>
      <ScrollView keyboardDismissMode="on-drag">
        <Stack gap={16}>
          <ToggleSwitch onCheckedChange={toggleTheme} />
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
        </Stack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;
