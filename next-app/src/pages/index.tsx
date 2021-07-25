import * as React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Sidebar from '@/components/Sidebar'
import styles from '@/styles/pages/Home.module.scss'


export default function Home() {
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

          {/* Column 1 - left-side column */}
          <Grid className={styles.gridItem} item md={3} xs={12}>
            <Paper className={styles.sidebar} elevation={3}>
              <Sidebar />
            </Paper>
          </Grid>

          {/* Column 2 - right-side column */}
          <Grid className={styles.gridItem} item md={9} xs={12}>
            <Paper className={styles.item} elevation={3}>
              <div>Right-side column | main content</div>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </div>
  )
}
