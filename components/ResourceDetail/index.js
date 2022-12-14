import styles from './styles.module.scss';
import ActionButtons from '../ActionButtons';
import { useRouter } from 'next/router';
const ResourceDetail = ({ resource }) => {
  const { id, title, description, link, createdAt, timeToFinish, priority } =
    resource;
  const router = useRouter();
  const activeResource = () => {
    fetch(`/api/resources`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
      body: JSON.stringify({ ...resource, active: true }),
    })
    router.push('/');
  };
  //TODO add .catch and .then to the fetch  with a message

  return (
    <div className={styles.resource_detail}>
      <div className={styles.resource}>
        <button className={styles.do} onClick={activeResource}>
          Do it Now
        </button>
        <ActionButtons id={id} redirect />
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
          <span className={styles.time}>
            {timeToFinish} hours estimated to finish
          </span>
        </p>
      </div>
    </div>
  );
};

export default ResourceDetail;
