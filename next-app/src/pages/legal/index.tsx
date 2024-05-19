import Link from 'next/link';
import styles from '@/styles/pages/Legal.module.scss'

export default function Legal() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
          <div className={styles.div}>
          <div className={styles.outer}>

            {/* Title */}
            <div className={styles.item}>
              <div className={styles.divItem}>
                <h2 className={styles.header} variant='h2' component='h1'>
                  We value transparency
                </h2>
              </div>
            </div>

            {/* Header */}
            <div className={styles.item}>
              <Divider />
            </div>

            {/* Subheader */}
            <div className={styles.item}>
              <div className={styles.divItem}>
                <h2 className={styles.subheader}>
                  Click a topic below to learn about our policies
                </h2>
              </div>
            </div>

            {/* Privacy-policy page link */}
            <div className={styles.item}>
              <div className={styles.divItem}>
                <Link href='/legal/privacy-policy' className={styles.button}>
                  <h2 className={styles.endpoint}>
                    Privacy policy
                  </h2>
                </Link>
              </div>
            </div>

            {/* Terms-of-service agreement page link */}
            <div className={styles.item}>
              <div className={styles.divItem}>
                <Link href='/legal/terms-of-service' className={styles.button}>
                  <h2 className={styles.endpoint}>
                    Terms of service
                  </h2>
                </Link>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  )
}
