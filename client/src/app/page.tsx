// TODO remove unused line
import Image from 'next/image';
import styles from './page.module.css';
import { redirect } from 'next/navigation';

export default function Home () {
  // TODO remove commented line
  // const router = useRouter();
  redirect('/login');
  // Q return not used?
  return <main className={styles.main}>
    sadf
  </main>;
}
