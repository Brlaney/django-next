import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.scss';

const links = [
  { id: 1, name: 'Homepage', link: '/' },
  { id: 2, name: 'Orders', link: '/orders' },
  { id: 3, name: 'Contact', link: '/contact' },
  { id: 4, name: 'Legal', link: '/legal' },
];

export default function Navbar() {
  return (
    <div className={styles.navbar} >
      <nav className={styles.navcontainer}>
        <div className={styles.parent}>
          <a href='/' className={styles.brand}>
            BPR Data Analysis
          </a>
        </div>

        {/* Navbar links - right-end of navbar */}
        <div className={styles.rightside}>
          <ul className={styles.list}>

            <div className={styles.item}>

              {/* Iterate over the links array */}
              {links.map(link => (
                <Link
                  key={link.id}
                  href={{
                    pathname: link.link,
                  }}
                  className={styles.link}
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </ul>
        </div>
      </nav>
    </div>
  )
};
