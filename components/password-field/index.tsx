import { memo } from 'react';
import type { SizeTokens } from 'tamagui';
import { Button, Input, XStack } from 'tamagui';
import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';

export const PasswordField = memo(({ size, value }: { size: SizeTokens; value: string }) => {
  const onPress = async () => {
    Haptics.selectionAsync();

    // Copy the password to the clipboard
    await Clipboard.setStringAsync(value);
  };

  return (
    <XStack alignItems="center" gap="$2">
      <Input flex={1} size={size} value={value} disabled theme="blue" />
      <Button size={size} onPress={onPress} theme="blue">
        コピー
      </Button>
    </XStack>
  );
});

PasswordField.displayName = 'PasswordField';
