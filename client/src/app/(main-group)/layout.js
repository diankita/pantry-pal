import { Box } from '@mui/material';
import styles from './layout.module.css';
import BottomNav from '@/components/BottomNav';
import TopNav from '@/components/TopNav';

export default function MainLayout({ children }) {
  return (
    <Box height="100%" paddingBottom={7}>
      <TopNav title="aslkdj"></TopNav>
      {children}
      <BottomNav></BottomNav>
    </Box>
    // TODO use redux to control state for showing bottom nav
    // TODO use redux to control state for top nav title
  );
}
