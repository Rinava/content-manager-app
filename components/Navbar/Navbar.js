import Link from 'next/link';
import styles from './Navbar.module.scss';
import Image from 'next/image';
import logo from '../../styles/assets/logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>
        <Link href='/'>
          <a className={styles.link}>
            <Image src={logo} alt='Landscape picture' className={styles.logo} />
            Content Manager
          </a>
        </Link>
      </h1>
      <div className={styles.search}>
        <input type='search' />
        <button>Search</button>
      </div>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/resources/new'>
            <a>Add</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
