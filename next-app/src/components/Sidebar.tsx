import * as React from 'react';
import { useState, useEffect, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import LanguageIcon from '@material-ui/icons/Language';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
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
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [language, setLanguage] = useState('en');
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
        id='new'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem id='newItem'>
          Currently using <span className={styles.highlight}>{language}</span>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('en-US')}
            className={styles.button}
          >
            English (en-US)
          </Button>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('es')}
            className={styles.button}
          >
            Spanish (es)
          </Button>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('fr')}
            className={styles.button}
          >
            French (fr)
          </Button>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('hi')}
            className={styles.button}
          >
            Hindi (hi)
          </Button>
        </MenuItem>
      </Menu>
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
        <MenuItem id='newItem'>
          Currently using <span className={styles.highlight}>
            {language}
          </span>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('en')}
            className={styles.button}
          >
            English (en-US)
          </Button>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('es')}
            className={styles.button}
          >
            Spanish (es)
          </Button>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('fr')}
            className={styles.button}
          >
            French (fr)
          </Button>
        </MenuItem>
        <MenuItem id='newItem'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setLanguage('hi')}
            className={styles.button}
          >
            Hindi (hi)
          </Button>
        </MenuItem>
      </Menu>
    </div >
  )
};

export default Sidebar;
