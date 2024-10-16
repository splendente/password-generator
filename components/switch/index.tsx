import { Switch } from '@tamagui/switch';

type Props = {
  onCheckedChange: () => void;
};

export const ToggleSwitch = ({ onCheckedChange }: Props) => {
  const handleChange = (checked: boolean) => {
    const theme = checked ? 'dark' : 'light';
    onCheckedChange(() => theme);
  };

  return (
    <Switch size="$4" onCheckedChange={handleChange}>
      <Switch.Thumb animation="bouncy" />
    </Switch>
  );
};
