import Link from 'next/link';
import styles from './styles.module.scss';
const Resources = ({ resources }) => {
  return (
    <div className={styles.resources}>
      {resources.map((resource) => {
        const { id, title, description, createdAt } = resource;
        return (
          <div key={id} className={styles.resource}>
            <time className={styles.created_at}>{createdAt}</time>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
            <Link href={`/resources/${id}`}>
              <a className={styles.link}>See Details</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Resources;
