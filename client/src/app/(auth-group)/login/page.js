import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';

export default function Page() {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={2} width={'100%'}>
      <TextField
        id="login-email"
        fullWidth
        label="Email"
        type="email"
        // TODO should probably be email
        autoComplete="current-password"
      />
      <TextField
        id="login-password"
        fullWidth
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <MuiLink href="#" underline="hover" sx={{ alignSelf: 'flex-end' }}>
        Forgot Password?
      </MuiLink>
      <Link
        href={{
          pathname: '/home',
        }}>
        <Button variant="contained" fullWidth={true}>
          Login
        </Button>
      </Link>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          my: 1,
        }}>
        <Box sx={{ flexGrow: 1 }}>
          <hr />
        </Box>
        <Box sx={{ margin: '0 8px' }}>OR</Box>
        <Box sx={{ flexGrow: 1 }}>
          <hr />
        </Box>
      </Box>
      <Typography align="center">Not a member yet? </Typography>
      <Link
        href={{
          pathname: '/signup',
        }}>
        <Button variant="outlined" fullWidth>
          Sign Up
        </Button>
      </Link>
    </Box>
  );
}
