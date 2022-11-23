import Newsletter from '../Newsletter';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Newsletter />
      <p>&copy; Copyright 2022 Rinava&hearts;</p>
    </footer>
  );
};
export default Footer;
