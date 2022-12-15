import Layout from '../../../components/Layout';
import ResourceForm from '../../../components/ResourceForm';
const ResourceEditPage = ({ resource }) => {
  const editResource = (formData) => {
    fetch(`/api/resources/`, {
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
      method: 'PUT',
    });
  };

  return (
    <Layout>
      <ResourceForm resourceToEdit={resource} onSubmit={editResource} />
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
export default ResourceEditPage;
