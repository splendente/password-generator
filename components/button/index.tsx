import { Button } from 'tamagui';
import { KeyRound } from '@tamagui/lucide-icons';
import * as Haptics from 'expo-haptics';

type Props = {
  onPress?: () => void;
  text: string;
};

export const SubmitButton = ({ onPress, text }: Props) => {
  const handlePress = () => {
    if (!onPress) return;

    Haptics.selectionAsync();

    onPress();
  };

  return (
    <Button alignSelf="center" size="$6" icon={KeyRound} onPress={handlePress} theme="blue">
      {text}
    </Button>
  );
};
