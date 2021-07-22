import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styles from '@/styles/components/About.module.scss'

const About = () => {
  return (
    <Grid className={styles.gridItem} item xl={10} lg={10} md={10} sm={12} xs={12}>
      <Card className={styles.card} elevation={3}>
        <Box className={styles.box}>

          {/* Card titles/header */}
          <CardContent className={styles.content}>
            <Typography className={styles.title1} variant='h4' component='div'>
              Hello, I'm Brendan 👋
            </Typography>
            <Typography className={styles.title2} variant='h6' component='div'>
              A <strong>full-stack</strong> web developer
            </Typography>
            <Typography className={styles.body} variant='body2' align='justify' paragraph>
              I take an <strong>actionable</strong> approach for my clients
              integrating <strong> SEO</strong>, <strong>accessability</strong>,
              and your <i>brands</i> <strong> unique</strong> targeted audience
              into the services I provide.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  )
}

export default About
