import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import Divider from '@material-ui/core/Divider';
import { fadeInUp, stagger } from '@/lib/framer/home'
import { motion } from 'framer-motion'
import styles from '@/styles/pages/Legal.module.scss'


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
            direction='column'
            alignItems='center'
            justifyContent='center'
        >
          <motion.div className={styles.outer} variants={stagger}>

            {/* Title */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.gridItem} item xs={12}>
                <Typography className={styles.header} variant='h2' component='h1'>
                  We value transparency
                </Typography>
              </Grid>
            </motion.div>

            {/* Header */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Divider />
            </motion.div>

            {/* Subheader */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.gridItem} item xs={12}>
                <Typography className={styles.subheader} variant='h4' component='h2'>
                  Click a topic below to learn about our policies
                </Typography>
              </Grid>
            </motion.div>

            {/* Privacy-policy page link */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.gridItem} item xs={12}>
                <Link href='/legal/privacy-policy' className={styles.button}>
                  <Typography className={styles.endpoint} variant='body1' component='h3'>
                    Privacy policy
                  </Typography>
                </Link>
              </Grid>
            </motion.div>

            {/* Terms-of-service agreement page link */}
            <motion.div className={styles.item} variants={fadeInUp}>
              <Grid className={styles.gridItem} item xs={12}>
                <Link href='/legal/terms-of-service' className={styles.button}>
                  <Typography className={styles.endpoint} variant='body1' component='h3'>
                    Terms of service
                  </Typography>
                </Link>
              </Grid>
            </motion.div>
        
          </motion.div>
        </Grid>
      </Container>
    </motion.div>
  )
}
