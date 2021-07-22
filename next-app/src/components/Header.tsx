import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import styles from '@/styles/components/Header.module.scss'

const Header = () => {
  return (
    <Container className={styles.header}>
      <Typography className={styles.title} variant='h1' component='h1'>
        Brendan's portfolio
      </Typography>
      <Typography className={styles.tagline} variant='h5' component='h3' gutterBottom>
        Original development work
      </Typography>
    </Container>
  )
}

export default Header
