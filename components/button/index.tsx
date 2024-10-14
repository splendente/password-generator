import { Button } from 'tamagui';
import { KeyRound } from '@tamagui/lucide-icons';

type Props = {
  onPress?: () => void;
  text: string;
};

export const SubmitButton = ({ onPress, text }: Props) => {
  return (
    <Button alignSelf="center" size="$6" icon={KeyRound} onPress={onPress} theme="blue">
      {text}
    </Button>
  );
};
