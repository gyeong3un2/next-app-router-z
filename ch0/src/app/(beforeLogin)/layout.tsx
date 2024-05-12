import { ReactNode } from 'react';
import styles from '@/app/page.module.css';

type Props = { children: ReactNode; modal: ReactNode };

/**
 * 로그인 전 레이아웃
 */
export default function Layout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      {children}
      {modal}
    </div>
  );
}
