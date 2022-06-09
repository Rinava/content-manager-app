import Newsletter from '../components/Newsletter';
import ResourceHighlight from '../components/ResourceHighlight';
import ResourceList from '../components/ResourceList';
import Layout from '../components/Layout/Layout';

export default function Home({ resources }) {

  return (
    <Layout>
      <Newsletter />
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <ResourceList resources={resources.slice(2)} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const resData = await fetch('http:/localhost:3001/api/resources');
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}
