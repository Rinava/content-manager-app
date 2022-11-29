import styles from './styles.module.scss';
const ResourceDetail = ({ resource }) => {
  const { title, description, link, createdAt, timeToFinish, priority } =
    resource;
  return (
    <div className={styles.resource_detail}>
      <div className={styles.resource}>
        <button className={styles.do}>Do it Now</button>
        <div className={styles.buttons}>
          <button className={styles.edit}>✏️</button>
          <button className={styles.delete}>🗑️</button>
        </div>
        <time className={styles.creation_date}>{createdAt}</time>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.priority}> {priority} priority</p>
        {description && <p className={styles.description}>{description}</p>}
        {link && (
          <a
            className={styles.link}
            href={link}
            target='_blank'
            rel='noopener noreferrer'>
            {link}
          </a>
        )}
        <p className={styles.time_finish}>
          Time needed <span className={styles.time}>{timeToFinish} hours</span>
        </p>
      </div>
    </div>
  );
};

export default ResourceDetail;
