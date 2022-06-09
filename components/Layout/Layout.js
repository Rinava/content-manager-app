import styles from './Layout.module.scss';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
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
