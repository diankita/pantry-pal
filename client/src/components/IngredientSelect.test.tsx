// @ts-nocheck
import { test } from 'vitest';
import { Ingredient } from '../lib/types';

function mockFilterFunc(
  options: Ingredient[],
  { inputValue }: { inputValue: string }
) {
  return options.filter((option) => option.name.includes(inputValue));
}

// Mock Ingredient data
const mockIngredients: Ingredient[] = [
  { id: 1, name: 'Apple', amount: 1, unit: 'lb' },
  { id: 2, name: 'Banana', amount: 2, unit: 'lb' },
  { id: 2, name: 'Banana Split', amount: 2, unit: 'lb' },
  { id: 3, name: 'Carrot', amount: 3, unit: 'lb' },
];

describe.only('filterFunc', () => {
  test('filters ingredients correctly', async () => {
    expect(mockFilterFunc(mockIngredients, { inputValue: 'Ban' })).toEqual([
      {
        amount: 2,
        id: 2,
        name: 'Banana',
        unit: 'lb',
      },
      {
        amount: 2,
        id: 2,
        name: 'Banana Split',
        unit: 'lb',
      },
    ]);
  });
});
