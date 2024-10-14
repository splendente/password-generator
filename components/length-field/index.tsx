import type React from 'react';
import { Input, Paragraph, XStack } from 'tamagui';

type Props = {
  length: number;
  setLength: (length: number) => void;
};

export const LengthField = ({ length, setLength }: Props) => {
  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = Number.parseInt(event, 10);
    if (Number.isNaN(parsedValue)) return;
    setLength(parsedValue);
  };

  return (
    <>
      <Paragraph size="$6">パスワードの長さ</Paragraph>
      <XStack alignItems="center" gap="$2">
        <Input
          flex={1}
          theme="blue"
          size="$4"
          onChangeText={onChangeText}
          value={length.toString()}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </XStack>
    </>
  );
};
