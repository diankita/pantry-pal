import styles from './layout.module.css';
import BottomNav from '@/components/bottomNav';

export default function MainLayout({ children }) {
  return (
    <div id={styles['main-layout']}>
      <div className={styles['content']}>{children}</div>
      {/* <BottomNav></BottomNav> */}
      <BottomNav></BottomNav>
    </div>
  );
}
