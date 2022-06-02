import Link from 'next/link';
import styles from './Navbar.module.scss';
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>Content Manager</h1>
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
