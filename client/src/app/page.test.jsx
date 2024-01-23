import { redirect } from 'next/navigation';
import Page from './page';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

describe('Page', () => {
  it('should call redirect with correct arguments', () => {
    Page();

    expect(redirect).toHaveBeenCalledWith('/login');
  });
});
