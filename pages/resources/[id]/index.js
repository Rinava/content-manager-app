import Layout from '../../../components/Layout';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import ResourceDetail from '../../../components/ResourceDetail';
const ResourceDetailPage = ({ resource }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <ResourceDetail resource={resource} />
    </Layout>
  );
};
export async function getStaticPaths() {
  const response = await fetch('http://localhost:3001/api/resources');
  const resources = await response.json();
  const paths = resources.map((resource) => ({
    params: { id: resource.id.toString() },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  );
  const data = await response.json();
  return {
    props: {
      resource: data,
    },
    revalidate: 1,
  };
}

export default ResourceDetailPage;
