import Link from 'next/link'
import styles from '@/styles/pages/Legal.module.scss'

export default function TermsOfService() {
  return (
    <div className={styles.div}>
      <div className={styles.main}>
        <div className={styles.div}>
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
              <h2 className={styles.header}>
                Terms of service agreement
              </h2>
            </div>

            {/* Divider */}
            <div className={styles.item}>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
