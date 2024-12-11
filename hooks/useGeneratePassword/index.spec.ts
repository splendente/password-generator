import { expect, test, describe } from '@jest/globals';
import { renderHook } from '@testing-library/react';
import { useGeneratePassword } from '@/hooks/useGeneratePassword';

describe('useGeneratePassword', () => {
  const { result } = renderHook(() => useGeneratePassword());

  test('invalid length', () => {
    const length = 0;
    const useLowerCase = true;
    const useUpperCase = true;
    const useNumbers = true;
    const useSymbols = true;

    expect(() =>
      result.current.updatePassword(length, useLowerCase, useUpperCase, useNumbers, useSymbols),
    ).toThrowError('Invalid length');
  });

  test('invalid length', () => {
    const length = 129;
    const useLowerCase = true;
    const useUpperCase = true;
    const useNumbers = true;
    const useSymbols = true;

    expect(() =>
      result.current.updatePassword(length, useLowerCase, useUpperCase, useNumbers, useSymbols),
    ).toThrowError('Invalid length');
  });

  test('invalid selected options', () => {
    const length = 128;
    const useLowerCase = false;
    const useUpperCase = false;
    const useNumbers = false;
    const useSymbols = false;

    expect(() =>
      result.current.updatePassword(length, useLowerCase, useUpperCase, useNumbers, useSymbols),
    ).toThrowError('At least one option must be selected');
  });

  test('valid input values', () => {
    const length = 16;
    const useLowerCase = true;
    const useUpperCase = true;
    const useNumbers = true;
    const useSymbols = true;

    expect(() =>
      result.current.updatePassword(length, useLowerCase, useUpperCase, useNumbers, useSymbols),
    ).not.toThrowError();
  });
});
