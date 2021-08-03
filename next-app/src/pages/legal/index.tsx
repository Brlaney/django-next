import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import { fadeInUp, stagger } from '@/lib/framer/home'
import { motion } from 'framer-motion'
import styles from './Legal.module.scss'

export default function Legal() {
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
            direction='row'
            alignItems='center'
            justifyContent='center'
        >
          <motion.div className={styles.outer} variants={stagger}>

            {/* Title */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.gridItem} item xs={12}>
                <Paper className={styles.paper} elevation={3}>
                  <Typography className={styles.header} variant='h2' component='h1'>
                    We value transparency
                  </Typography>
                  <Typography className={styles.subheader} variant='h4' component='h2'>
                    Click a topic below to learn about our policies
                  </Typography>
                </Paper>
              </Grid>
            </motion.div>

            {/* Privacy-policy page link */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.gridItem} item xs={12}>
                <Paper className={styles.paper} elevation={3}>
                  <div className={styles.link}>
                    <Link href='/legal/privacy-policy' className={styles.button}>
                      <Typography className={styles.endpoint} variant='h5' component='h3'>
                        Privacy policy
                      </Typography>
                    </Link>
                  </div>
                </Paper>
              </Grid>
            </motion.div>

            {/* Terms-of-service agreement page link */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.gridItem} item xs={12}>
                <Paper className={styles.paper} elevation={3}>
                  <div className={styles.link}>
                    <Link href='/legal/terms-of-service' className={styles.button}>
                      <Typography className={styles.endpoint} variant='h5' component='h3'>
                        Terms of service
                      </Typography>
                    </Link>
                  </div>
                </Paper>
              </Grid>
            </motion.div>
        
          </motion.div>
        </Grid>
      </Container>
    </motion.div>
  )
}
