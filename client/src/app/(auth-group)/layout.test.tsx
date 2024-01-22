import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import Page from '@/app/(auth-group)/login/page';
import AuthLayout from '@/app/(auth-group)/layout';

test('Page', () => {
  render(<AuthLayout>
    <Page />
  </AuthLayout>);
  expect(
    screen.getByRole('heading', {
      level: 1,
      name: 'The Only Kitchen App You Need',
    })
  ).toBeDefined();
});
