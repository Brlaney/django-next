import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import styles from '@/styles/components/Sidebar.module.scss'


const NavItem: FunctionComponent<{
  active: string
  setActive: Function
  name: string
  route: string
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link className={styles.Link} href={route}>
      <Typography
        className={styles.navLink}
        onClick={() => setActive(name)}
        variant='h5'
        component='h5'
      >
        {name}
      </Typography>
    </Link>
  ) : null
}

const Sidebar = () => {
  const { pathname } = useRouter()
  const [active, setActive] = useState('')

  useEffect(() => {
    if (pathname === '/') setActive('Homepage')
    else if (pathname === '/orders') setActive('Orders')
    else if (pathname === '/legal') setActive('Legal')
    else if (pathname === '/contact') setActive('Contact')
  }, [])

  return (
    <div className={styles.navChild}>
      <Typography variant='h5' component='h5' className={styles.active}>
        {active}
      </Typography>

      <div className={styles.nav}>
        <NavItem
          active={active}
          setActive={setActive}
          name='Homepage'
          route='/'
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='Orders'
          route='/orders'
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='Legal'
          route='/legal'
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='Contact'
          route='/contact'
        />
      </div>
    </div>
  )
}

export default Sidebar
