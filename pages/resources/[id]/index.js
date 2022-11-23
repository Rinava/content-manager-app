import Layout from '../../../components/Layout';
import styles from './styles.module.scss';
const ResourceDetail = ({ resource }) => {
  return (
    <Layout>
      <h2 className={styles.title}>{resource.title}</h2>
      <div className={styles.container}>
        <p className={styles.description}>{resource.description}</p>
        <a
          className={styles.link}
          href={resource.link}
          target='_blank'
          rel='noreferrer'>
          Link
        </a>
        <p className={styles.timeToFinish}>
          Time to finish: {resource.timeToFinish}
        </p>
        <p className={styles.priority}> {resource.priority} priority</p>
      </div>
    </Layout>
  );
};


export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;
