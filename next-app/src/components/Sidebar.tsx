import * as React from 'react';
import { useState, useEffect, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import styles from '@/styles/components/Sidebar.module.scss';
import useMediaQuery from '@material-ui/core/useMediaQuery';

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
      <Typography
        className={styles.active}
        onClick={() => setActive(name)} variant='h5' component='h5'
      >
        {name}
      </Typography>
    </Link>
  )
};

const Sidebar = () => {
  const matches = useMediaQuery((theme: any) => theme.breakpoints.up('md'));
  const { pathname } = useRouter();
  const [active, setActive] = useState('');

  useEffect(() => {
    if (pathname === '/') setActive('Homepage')
    else if (pathname === '/orders') setActive('Orders')
    else if (pathname === '/legal') setActive('Legal')
    else if (pathname === '/contact') setActive('Contact')
  }, []);

  if (!matches) return (
    <div id='parent'>
      <div id='horizontal'>
        <NavItem active={active} setActive={setActive} name='Homepage' route='/' />
        <NavItem active={active} setActive={setActive} name='Orders' route='/orders' />
        <NavItem active={active} setActive={setActive} name='Legal' route='/legal' />
        <NavItem active={active} setActive={setActive} name='Contact' route='/contact' />
      </div>
    </div >
  );

  return (
    <div className={styles.navChild}>
      <div className={styles.nav}>
        <NavItem active={active} setActive={setActive} name='Homepage' route='/' />
        <NavItem active={active} setActive={setActive} name='Orders' route='/orders' />
        <NavItem active={active} setActive={setActive} name='Legal' route='/legal' />
        <NavItem active={active} setActive={setActive} name='Contact' route='/contact' />
      </div>
    </div >
  )
};

export default Sidebar;
