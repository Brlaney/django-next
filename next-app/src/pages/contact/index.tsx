import * as React from 'react'
import styles from '@/styles/pages/Contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.outer}>
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.item}>
            <h1>
              Contact me
            </h1>
          </div>

          <form className={styles.form}>
            <div>
              test
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
