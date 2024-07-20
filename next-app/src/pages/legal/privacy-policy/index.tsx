import Link from 'next/link';
import styles from '@/styles/pages/Legal.module.scss';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Begin stagger effect */}
        <div className={styles.outer}>

          {/* Go back button */}
          <div className={styles.item}>
                <Link href='/legal/'>
                  <button className={styles.button}>
                    Back
                  </button>
                </Link>
            </div>

          {/* Page title / header */}
          <div className={styles.item}>
            Privacy Policy Page
          </div>

          {/* Divider */}
          <div className={styles.item}>
            g
          </div>
        </div>
      </div>
    </div>
  );
};
