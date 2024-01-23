import { render, screen } from '@testing-library/react';
import Page from './login/page';
import AuthLayout from './layout';

describe('Auth layout', () => {
  it('should render the heading', () => {
    render(
      <AuthLayout>
        <Page />
      </AuthLayout>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'The Only Kitchen App You Need',
      })
    ).toBeDefined();
  });
});
