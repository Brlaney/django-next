import { Typography } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import styles from './Legal.module.scss'
// import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <Container className={styles.main} component='main'>

        <Grid
          className={styles.grid}
          container
          direction='row'
          alignItems='center'
          justifyContent='center'
        >
          <Grid className={styles.item} item xs={12}>
            <Paper className={styles.paper} elevation={3}>
              <Typography className={styles.header} variant='h2' component='h1'>
                Privacy policy
              </Typography>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}
