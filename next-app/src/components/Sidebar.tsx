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
    else if (pathname === '/current-orders') setActive('Current Orders')
    else if (pathname === '/archived-orders') setActive('Archived Orders')
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
          name='Current orders'
          route='/current-orders'
        />
        <NavItem
          active={active}
          setActive={setActive}
          name='Archived orders'
          route='/archived-orders'
        />
      </div>
    </div>
  )
}

export default Sidebar
