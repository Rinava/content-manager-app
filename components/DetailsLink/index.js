import Link from 'next/link';
import styles from './styles.module.scss';

const DetailsLink = ({ id }) => {
  return (
    <Link href='/resources/[id]' as={`/resources/${id}`}>
      <a className={styles.link}>See Details</a>
    </Link>
  );
};
export default DetailsLink;
