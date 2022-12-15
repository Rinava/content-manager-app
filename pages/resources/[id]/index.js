import Layout from '../../../components/Layout';
import ResourceDetail from '../../../components/ResourceDetail';
const ResourceDetailPage = ({ resource }) => {
  return (
    <Layout>
      <ResourceDetail resource={resource} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await response.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default ResourceDetailPage;
