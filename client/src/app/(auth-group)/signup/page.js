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
        id="signup-email"
        fullWidth
        label="Email"
        type="email"
      />
      <TextField
        id="signup-password"
        fullWidth
        label="Password"
        type="password"
      />
      <TextField
        id="signup-confirm-password"
        fullWidth
        label="Confirm Password"
        type="password"
      />
      <Button variant="contained" fullWidth={true}>
        Signup
      </Button>
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
      <Typography align="center">Already have an account? </Typography>
      <Link
        href={{
          pathname: '/login',
        }}>
        <Button variant="outlined" fullWidth>
          Login
        </Button>
      </Link>
    </Box>
  );
}
