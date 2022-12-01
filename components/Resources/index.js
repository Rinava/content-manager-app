import Link from 'next/link';
import ActionButtons from '../ActionButtons';
import styles from './styles.module.scss';
const Resources = ({ resources }) => {
  return (
    <div className={styles.resources}>
      {resources.map((resource) => {
        const { id, title, description, createdAt } = resource;
        return (
          <div key={id} className={styles.resource}>
            {/* TODO add kebab menu with edit and delete options */}
            <ActionButtons id={id} />
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
