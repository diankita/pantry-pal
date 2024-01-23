import { render, screen } from '@testing-library/react';
import LoginPage from './page';
import AuthLayout from '../layout';

describe('Login page', () => {
  it('should render the Login button with the correct text', () => {
    render(<LoginPage />);
    expect(screen.getByRole('button', { name: 'Login' })).toBeDefined();
  });

  it('should render the Signup button with the correct text', () => {
    render(<LoginPage />);
    expect(screen.getByRole('button', { name: 'Sign Up' })).toBeDefined();
  });

  it('should render the Forgot Password link with the correct text', () => {
    render(<LoginPage />);
    expect(
      screen.getByRole('link', { name: 'Forgot Password?' })
    ).toBeDefined();
  });

  it('should render the Email input with the correct label', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText('Email')).toBeDefined();
  });

  it('should render the Password input with the correct label', () => {
    render(<LoginPage />);
    expect(screen.getByLabelText('Password')).toBeDefined();
  });

  it('should redirect to signup page when signup button is clicked', () => {
    render(<LoginPage />);
    const signUpLink = screen.getByRole('link', { name: 'Sign Up' });
    expect(signUpLink.getAttribute('href')).toBe('/signup');
  });
});

describe('Auth layout', () => {
  it('should render the h1', () => {
    render(
      <AuthLayout>
        <LoginPage />
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
