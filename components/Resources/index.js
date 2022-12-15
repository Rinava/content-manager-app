import ActionButtons from '../ActionButtons';
import DetailsLink from '../DetailsLink';
import styles from './styles.module.scss';
const Resources = ({ resources }) => {
  return (
    <div className={styles.resources}>
      {resources.map((resource) => {
        const { id, title, description, createdAt, deadline } = resource;
        return (
          <div key={id} className={styles.resource}>
            {/* TODO add kebab menu with edit and delete options */}
            <ActionButtons id={id} />
            <time className={styles.created_at}>{createdAt}</time>
            <h2 className={styles.title}>{title}</h2>
            {description && <p className={styles.description}>{description}</p>}
            {deadline && <p>Deadline {deadline}</p>}
            <DetailsLink id={id} />
          </div>
        );
      })}
    </div>
  );
};

export default Resources;
