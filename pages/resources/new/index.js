import Layout from './../../../components/Layout';
import styles from './styles.module.scss';
import ResourceForm from '../../../components/ResourceForm';

const ResourceCreate = () => {
  const createResource = (formData) => {
    fetch('/api/resources', {
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    })
      .then((response) => console.log(response?.data))
      .catch((error) => alert('Error during the creation of the resource'));
  };

  return (
    <Layout>
      <ResourceForm onSubmit={createResource} />
    </Layout>
  );
};

export default ResourceCreate;
