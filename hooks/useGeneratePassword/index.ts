import { useState } from 'react';

export function useGeneratePassword() {
  const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  const [password, setPassword] = useState('');

  /**
   * Function to generate a random password
   * @param {number} length - The length of the password
   */
  const updatePassword = (
    length: number,
    useLowerCase: boolean,
    useUpperCase: boolean,
    useNumbers: boolean,
    useSymbols: boolean,
  ) => {
    // Validate the options
    if (!useLowerCase && !useUpperCase && !useNumbers && !useSymbols) {
      throw new Error('At least one option must be selected');
    }

    // Validate the length
    if (length < 1 || 128 < length) throw new Error('Invalid length');

    setPassword('');

    let chars = '';
    if (useLowerCase) chars += lowerCase;
    if (useUpperCase) chars += upperCase;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      setPassword((prev) => prev + chars[randomIndex]);
    }
  };

  return { password, updatePassword };
}
