import { Check as CheckIcon } from '@tamagui/lucide-icons';
import type { CheckboxProps } from 'tamagui';
import { Checkbox, Label, XStack } from 'tamagui';

type Props = CheckboxProps & {
  label?: string;
  onCheckedChange?: () => void;
};

export const CheckboxWithLabel = ({ id, size, label, checked, onCheckedChange }: Props) => {
  const handleChange = () => {
    onCheckedChange((prev) => !prev);
  };

  return (
    <XStack alignItems="center" gap="$2">
      <Checkbox id={id} size={size} checked={checked} onCheckedChange={handleChange} theme="blue">
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox>

      <Label size={size} htmlFor={id}>
        {label}
      </Label>
    </XStack>
  );
};