import styles from './layout.module.css';
import Image from 'next/image';
// TODO remove unused
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import MuiLink from '@mui/material/Link';

export default function AuthLayout({ children }) {
  return (
    <div id={styles['auth-layout']}>
      <video
        className={styles['video']}
        src={require('../../../public/video (1080p).mp4')}
        autoPlay
        muted
        loop></video>
      <div className={styles['video']}></div>
      <div className={styles['main-container']}>
        <div>
          <Image
            src="/name-logo-light.png"
            priority
            alt="PantryPal Logo"
            width={1000}
            height={1000}
            className={styles['logo']}
          />
        </div>
        <h1 className={styles['title']}>The Only Kitchen App You Need</h1>
        <div className={styles['form']}>
          {children}
        </div>
          <Typography
            variant="caption"
            display="block"
            align="center"
            color={'white'}
            sx={{ mt: 6 }}>
              By continuing, you agree to PantryPal&apos;s
              <br/>
              <MuiLink href="#" underline="hover">Terms of Service</MuiLink>{' | '}
              <MuiLink href="#" underline="hover">Privacy Policy</MuiLink>{' | '}
              <MuiLink href="#" underline="hover">Content Policy</MuiLink>
          </Typography>
      </div>
    </div>
  );
}
