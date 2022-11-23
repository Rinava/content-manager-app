import Resources from '../Resources';
import styles from './styles.module.scss';
const ResourcesSection = ({ resources }) => {
  return (
    <section className={styles.hero}>
        <Resources resources={resources} />
    </section>
  );
};
export default ResourcesSection;
