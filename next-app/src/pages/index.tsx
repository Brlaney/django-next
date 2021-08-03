import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import styles from '@/styles/pages/Home.module.scss'                                                  


export default function Home() {
  return (
    <>
      <Typography className={styles.title} variant='h1' component='h1'>
        Django-Next
      </Typography>
    </>
  )
}
