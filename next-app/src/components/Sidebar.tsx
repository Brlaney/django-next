import * as React from 'react'
import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from '@material-ui/core/Link'
import IconButton from '@material-ui/core/IconButton'
import LanguageIcon from '@material-ui/icons/Language'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
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
      <Typography className='h5' onClick={() => setActive(name)}>
        {name}
      </Typography>
    </Link>
  ) : (
    <Link className={styles.Link} href={route}>
      <Typography className={styles.active} onClick={() => setActive(name)} variant='h5' component='h5'>
        {name}
      </Typography>
    </Link>
  )
}

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [language, setLanguage] = useState('english')
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
      <div className={styles.nav}>
        <NavItem active={active} setActive={setActive} name='Homepage' route='/' />
        <NavItem active={active} setActive={setActive} name='Orders' route='/orders' />
        <NavItem active={active} setActive={setActive} name='Legal' route='/legal' />
        <NavItem active={active} setActive={setActive} name='Contact' route='/contact' />
      </div>
      <IconButton
        id='basic-button'
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>Currently using {language}</MenuItem>
        <MenuItem onClick={() => setLanguage('en-US')}>English, en-US</MenuItem>
        <MenuItem onClick={() => setLanguage('es')}>Spanish, es</MenuItem>
        <MenuItem onClick={() => setLanguage('fr')}>French, fr</MenuItem>
      </Menu>
    </div >
  )
}

export default Sidebar
