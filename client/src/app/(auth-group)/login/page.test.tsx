import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Page from './page';
import AuthLayout from '../layout';

test('renders a button with the correct text', () => {
  render(<Page />);
  expect(screen.getByRole('button', {name: 'Login'})).toBeDefined();
});

test('render the h1', () => {
  render(<AuthLayout><Page/></AuthLayout>);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'The Only Kitchen App You Need',
    })
  ).toBeDefined();
});

