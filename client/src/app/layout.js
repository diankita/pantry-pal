import { Inter } from 'next/font/google';
import './globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/build/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import StoreProvider from './StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  viewport: 'initial-scale=1, width=device-width',
};

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <StoreProvider>
            <ThemeProvider theme={theme}>
              {children}
              <CssBaseline />
            </ThemeProvider>
          </StoreProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}