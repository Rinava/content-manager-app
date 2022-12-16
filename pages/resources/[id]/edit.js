import ResourceForm from '../../../components/ResourceForm';
import { useRouter } from 'next/router';
import { ResourcesContext } from '../../../components/Layout';
import { useContext } from 'react';
const ResourceEditPage = ({ resource }) => {
  const router = useRouter();
  const { fetchResources } = useContext(ResourcesContext);
  const editResource = async (formData) => {
    try {
      const updateResource = await fetch(`/api/resources/`, {
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
      });
      await updateResource.json();
      fetchResources();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return <ResourceForm resourceToEdit={resource} onSubmit={editResource} />;
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
