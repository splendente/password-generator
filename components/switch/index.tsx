import { Switch } from 'tamagui';

type Props = {
  onCheckedChange: () => void;
};

export const ToggleSwitch = ({ onCheckedChange }: Props) => {
  /**
   * Function to handle the switch change
   * @param {boolean} checked - The state of the switch
   */
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
