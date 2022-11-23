import Resources from '../Resources';
import styles from './styles.module.scss';
const ResourceHighlight = ({ resources }) => {
  return (
    <section className={styles.highlight_section}>
      <div className={styles.highlight}>
        <Resources resources={resources} highlight />
      </div>
    </section>
  );
};
export default ResourceHighlight;
