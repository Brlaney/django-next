import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider';
import { fadeInUp, stagger } from '@/lib/framer/home'
import { motion } from 'framer-motion'
import Link from 'next/link'
import styles from './Terms.module.scss'


export default function TermsOfService() {
  return (
    <motion.div
      className={styles.container}
      initial='initial'
      animate='animate'
      exit={{ opacity: 0 }}
    >
      <Container className={styles.main} component='main'>
        <Grid
          className={styles.grid}
          container
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <motion.div className={styles.outer} variants={stagger}>

            {/* Go back button */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.item} item xs={12}>
                <Link href='/legal/'>
                  <Button className={styles.button} variant='contained' color='primary'>
                    Back
                  </Button>
                </Link>
              </Grid>
            </motion.div>

            {/* Page title / header */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.item} item xs={12}>
                <Typography className={styles.header} variant='h2' component='h1'>
                  Terms of service agreement
                </Typography>
              </Grid>
            </motion.div>

            {/* Divider */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Divider />
            </motion.div>

          </motion.div>
        </Grid>
      </Container>
    </motion.div>
  )
}
