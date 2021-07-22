import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styles from '@/styles/components/Sidebar.module.scss'

const Sidebar = () => {
  return (
    <Card className={styles.card} elevation={0}>

      {/* Card titles/header */}
      <CardContent className={styles.content}>

        {/* Introducing myself */}
        <Typography className={styles.title} variant='h6' component='h2'>
          Hello, I'm Brendan 👋
        </Typography>

        {/* My title */}
        <Typography className={styles.subtitle} variant='subtitle2'>
          A <strong>full-stack</strong> web developer
        </Typography>

        {/* Card body content - paragraph text */}
        <Typography className={styles.body} variant='body1' align='justify' paragraph>
          I take an <strong>actionable</strong> approach for my clients
          integrating <strong> SEO</strong>, <strong>accessability</strong>,
          and your <i>brands</i> <strong> unique</strong> targeted audience
          into the services I provide.
        </Typography>

      </CardContent>
    </Card>
  )
}

export default Sidebar
