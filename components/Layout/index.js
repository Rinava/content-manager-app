import styles from './styles.module.scss';
import Navbar from '../Navbar';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
      {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
